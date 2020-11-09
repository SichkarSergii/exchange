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
        width: '300px',
        height: '300px',
        borderRadius: '5px',
        border: '1px solid black',
        padding: '15px',
        textAlign: 'center',
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
    buttonContainer: {
        paddingTop: '50px',
    },
}));