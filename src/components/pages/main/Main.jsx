import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import {currencyLoad, calculatePaymentRequested, calculatePaymentLoaded, changeStep, calculatePaymentError,
        setInvoiceValue, setWithdrawValue, setInvoiceMethod, setWithdrawMethod } from "../../../store/actions";
 import style from './styles';
import {Grid, TextField, Button} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {PaidService} from "../../../services/paidService";
import debounce from 'lodash/debounce';

const Main = ({ classes, invoiceList, withdrawList, loading, error, exchangeData, currencyLoad, calculatePaymentRequested,
                  calculatePaymentLoaded, calculatePaymentError, changeStep, setInvoiceValue, setWithdrawValue,
                  setInvoiceMethod, setWithdrawMethod, form }) => {

    const paidService = new PaidService();

    const { invoiceValue, invoiceMethod, withdrawMethod, withdrawValue } = form;
    const clearInput = () => {
       setInvoiceValue('');
       setWithdrawValue('');
    };

    useEffect(() => {
        paidService.payMethods().then((data) => currencyLoad(data));
    }, []);

    const calculate = useCallback(debounce((method, amount) => {
        if (invoiceMethod && withdrawMethod && !!amount) {
            const data = {
                base: method,
                amount: Number(amount),
                invoicePayMethod: invoiceMethod.id,
                withdrawPayMethod: withdrawMethod.id,
            };
            calculatePaymentRequested();
            paidService.calculate(data)
                .then(({amount}) => {
                if (method === 'invoice') {
                    setWithdrawValue(amount);
                } else {
                    setInvoiceValue(amount);
                }
                    calculatePaymentLoaded(data);
            })
                .catch((err) => {
                    calculatePaymentError(err);
                });
        }
    }, 1000), [ invoiceMethod, withdrawMethod ]);

    const onConfirm = () => {
        changeStep(2);
    };

    const parseNumber = (v) => {
        const val = v.replace(/^\$/, '');
        const [value = null] = new RegExp(`(((0\\.)|(^\\-?\\d*\\.?))\\d{0,2})|(0)`).exec(val.replace(/,/g, '')) || [];
        return (value < 0) ? 0 : value;
    }
    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <h1>Sell</h1>
                        <Grid item xs={12} className={classes.select}>
                            <Autocomplete
                                id="invoice"
                                options={invoiceList}
                                getOptionLabel={(option) => option.name}
                                value={invoiceMethod}
                                onChange={(e, newValue) => {
                                    clearInput();
                                    setInvoiceMethod(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} variant="outlined"/>}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={invoiceValue}
                                onChange={(e) => {
                                    const value = parseNumber(e.target.value);
                                    setInvoiceValue(value);
                                    calculate('invoice', value);
                                }}
                                disabled={loading}
                                error={!!error}
                                helperText={error?.message}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Buy</h1>
                        <Grid item xs={12} className={classes.select}>
                            <Autocomplete
                                options={withdrawList}
                                getOptionLabel={(option) => option.name}
                                value={withdrawMethod}
                                onChange={(e, newValue) => {
                                    clearInput();
                                    setWithdrawMethod(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} variant="outlined"/>}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={withdrawValue}
                                onChange={(e) => {
                                    const value = parseNumber(e.target.value);
                                    setWithdrawValue(value);
                                    calculate('withdraw', value);
                                }}
                                disabled={loading}
                                error={!!error}
                                helperText={error?.message}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                        <Button
                            variant="contained"
                            className={classes.exchangeButton}
                            onClick={onConfirm}
                            disabled={!exchangeData}
                        >
                            Exchange
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const mapStateToProps = ({invoiceList, withdrawList, form, exchangeInfo: { loading, error, exchangeData }}) => {
    return { invoiceList, withdrawList, loading, error, exchangeData, form };
};

const mapDispatchToProps = {
    currencyLoad,
    calculatePaymentRequested,
    calculatePaymentLoaded,
    calculatePaymentError,
    setWithdrawValue,
    setWithdrawMethod,
    setInvoiceMethod,
    setInvoiceValue,
    changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(style(Main));
