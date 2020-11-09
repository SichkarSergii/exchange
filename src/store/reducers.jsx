const initialState = {
    invoiceList: [],
    withdrawList: [],
    step: 1,
    form: {
        invoiceMethod: null,
        invoiceValue: null,
        withdrawMethod: null,
        withdrawValue: null,
    },
    exchangeInfo: {
        loading: false,
        error: null,
        exchangeData: null,
    }
};

const reducer = (state = initialState, action) => {

        switch (action.type) {
            case 'FETCH_CURRENCY':
                const {invoice, withdraw} = action.payload;
                return {
                    ...state,
                    invoiceList: invoice,
                    withdrawList: withdraw,
                };
            case 'FETCH_CALCULATE_PAYMENT_REQUEST':
                return {
                    ...state,
                    exchangeInfo: {
                        loading: true,
                        error: null,
                        exchangeData: null,
                    },
                };
            case 'FETCH_CALCULATE_PAYMENT_SUCCESS':
                return {
                    ...state,
                    exchangeInfo: {
                        loading: false,
                        error: null,
                        exchangeData: action.payload,
                    },
                };

            case 'FETCH_CALCULATE_PAYMENT_FAILURE':
                return {
                    ...state,
                    exchangeInfo: {
                        loading: false,
                        error: action.payload,
                        exchangeData: null,
                    },
                };

            case 'SET_INVOICE_METHOD':
                return {
                    ...state,
                    form: {
                        ...state.form,
                        invoiceMethod: action.payload,
                    },
                };

            case 'SET_INVOICE_VALUE':
                return {
                    ...state,
                    form: {
                        ...state.form,
                        invoiceValue: action.payload,
                    },
                };

            case 'SET_WITHDRAW_METHOD':
                return {
                    ...state,
                    form: {
                        ...state.form,
                        withdrawMethod: action.payload,
                    },
                };

            case 'SET_WITHDRAW_VALUE':
                return {
                    ...state,
                    form: {
                        ...state.form,
                        withdrawValue: action.payload,
                    },
                };

            case 'CHANGE_STEP':
                return {
                    ...state,
                    step: action.payload,
                }

            case 'CLEAR_FORM':
                return {
                    ...initialState,
                };

            default:
                return state;
        }
    }
;

export default reducer;
