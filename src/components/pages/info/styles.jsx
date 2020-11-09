import { withStyles } from '@material-ui/core/styles';

export default withStyles(() => ({
    root: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        outline: 'none',
        borderRadius: '5px',
    },
    paper: {
        minWidth: '300px',
        width: 'auto',
        height: '300px',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '15px',
    },
    cancelButton: {
        border: '1px solid #58b4ae',
        backgroundColor: 'white',
        color: 'black',
        width: 'auto',
        padding: '0, 15px',
        '&:hover': {
            backgroundColor: '#58b4ae',
            color: 'white',
            border: 'none'
        },
    },
    confirmButton: {
        backgroundColor: '#58b4ae',
        color: 'white',
        width: 'auto',
        padding: '0, 15px',
        '&:hover': {
            border: '1px solid #58b4ae',
            backgroundColor: 'white',
            color: 'black',
        },
    },
    textAlign: {
        '& > p': {
            textAlign: 'right',
        },
    },
    contentContainer: {
        padding: '15px',
    },
    buttonAlign: {
      textAlign: 'center',
    }
}));