import React from "react";
import Main from "../components/pages/main";
import {connect} from "react-redux";
import Info from "../components/pages/info";
import Success from "../components/pages/success/Success";

const App = ({step}) => {
    switch (step) {
        case 1:
            return <Main/>
        case 2:
            return <Info/>;
        case 3:
            return <Success/>
        default:
            return <Main/>
    }
};

const mapStateToProps = ({step}) => {
    return {step};
};


export default connect(mapStateToProps)(App);