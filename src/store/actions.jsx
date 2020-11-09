export const currencyLoad = (data) => {
    return {
        type: 'FETCH_CURRENCY',
        payload: data,
    }
};

export const calculatePaymentRequested = () => {
    return {
        type: 'FETCH_CALCULATE_PAYMENT_REQUEST',
    };
};

export const calculatePaymentLoaded = (data) => {
    return {
        type: 'FETCH_CALCULATE_PAYMENT_SUCCESS',
        payload: data,
    };
};

export const calculatePaymentError = (error) => {
    return {
        type: 'FETCH_CALCULATE_PAYMENT_FAILURE',
        payload: error,
    };
};

export const setInvoiceMethod = (data) => {
    return {
        type: 'SET_INVOICE_METHOD',
        payload: data,
    };
};

export const setInvoiceValue = (data) => {
    return {
        type: 'SET_INVOICE_VALUE',
        payload: data,
    };
};

export const setWithdrawMethod = (data) => {
    return {
        type: 'SET_WITHDRAW_METHOD',
        payload: data,
    };
};

export const setWithdrawValue = (data) => {
    return {
        type: 'SET_WITHDRAW_VALUE',
        payload: data,
    };
};

export const changeStep = (data) => {
    return {
        type: 'CHANGE_STEP',
        payload: data,
    }
};

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
    };
};
