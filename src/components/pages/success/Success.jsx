import React from "react";
import {connect} from 'react-redux';
import {clearForm} from "../../../store/actions";
import style from "./styles";
import {Button, Grid} from "@material-ui/core";

const Success = ({classes, clearForm}) => {

    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>Success</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h5>Your exchange order has been placed successfully and will processed soon</h5>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            className={classes.confirmButton}
                            onClick={clearForm}
                        >
                            Home
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}


const mapDispatchToProps = {
    clearForm,
};

export default connect(null, mapDispatchToProps)(style(Success));