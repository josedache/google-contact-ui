import Contact from './Contact'
import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = createStyles({
    tr: {
        position: 'absolute',
        width: '100%',
        cursor: 'pointer',
        '&:hover .user-img': {
            // display: 'none'
        },
        '&:hover $iconButton': {
            visibility: 'visible'
        },
        '&:hover': {
            '& .user-img': {
                display: 'none'
            }
        }
    },
    td: {
        // height: '100%'
    },
    actionButtons: {
        textAlign: 'right'
    },
    iconButton: {
        visibility: 'hidden',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
})

export default withStyles(styles)(Contact)