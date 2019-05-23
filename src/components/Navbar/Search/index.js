import Search from './Search'
import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = theme => createStyles({
    root: {
        backgroundColor: 'lightgrey',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 700,
        boxShadow: 'none',
        '&:focus-within': {
            backgroundColor: 'white',
            boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
            borderRadius: '4px 4px 0 0'
        }
    },
    input: {
        flex: 1
    },
    closeIcon: {
        visibility: 'hidden'
    }
})


export default withStyles(styles)(Search)