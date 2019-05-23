import Sidebar from './Sidebar'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const styles = theme => createStyles({
    paperProps: {
        border: 0,
        backgroundColor: 'inherit',
        width: '280px',
        top: '64px'
    },
    createButton: {
        backgroundColor: 'initial',
        width: '184px'
    },
    listItemLink: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            borderRadius: '0 20px 20px 0'
        }
    }

})

const mapStateToProps = ({ showSidebar }) => ({ showSidebar })

export default connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
)(withStyles(styles)(Sidebar))