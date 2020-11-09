import React, {useState} from "react";
import {connect} from 'react-redux';
import {changeStep} from "../../../store/actions";
import style from "./styles";
import {Button, Grid} from "@material-ui/core";
import {PaidService} from "../../../services/paidService";

const Info = ({ classes, form, changeStep, exchangeData }) => {

    const { invoiceValue, invoiceMethod, withdrawMethod, withdrawValue } = form;

    const [ disabledButton, setDisabledButton ] = useState(false);

    const paidService = new PaidService();

    const onSubmit = () => {
        setDisabledButton(true);
        paidService.bids(exchangeData)
            .then((data) => {
                if (data.message === 'Success') {
                    changeStep(3)
                } else {
                    setDisabledButton(false);
                }
            })
            .catch((err) => {
                setDisabledButton(false);
                throw new Error(err);
            })
    };

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Details</h1>
                    </Grid>
                    <Grid container direction="row" justify="space-between" className={classes.contentContainer}>
                        <Grid item xs={2}>
                            <p>Sell</p>
                        </Grid>
                        <Grid item xs={10} className={classes.textAlign}>
                            <p>{`${invoiceValue} ${invoiceMethod.name}`}</p>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" className={classes.contentContainer}>
                        <Grid item xs={2}>
                            <p>Buy</p>
                        </Grid>
                        <Grid item xs={10} className={classes.textAlign}>
                            <p>{`${withdrawValue} ${withdrawMethod.name}`}</p>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6} className={classes.buttonAlign}>
                            <Button
                                variant="contained"
                                className={classes.cancelButton}
                                onClick={() => changeStep(1)}
                                disabled={disabledButton}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6} className={classes.buttonAlign}>
                            <Button
                                variant="contained"
                                className={classes.confirmButton}
                                onClick={onSubmit}
                                disabled={disabledButton}
                            >
                                Confirm
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

const mapStateToProps = ({form, exchangeInfo: {exchangeData}}) => {
    return {form, exchangeData};
};

const mapDispatchToProps = {
    changeStep,
};

export default connect(mapStateToProps, mapDispatchToProps)(style(Info));