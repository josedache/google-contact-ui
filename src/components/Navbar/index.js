import Navbar from './Navbar'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import actionCreators from '../../store/actions'
import { TOGGLE_SIDEBAR } from '../../store/types'

const styles = theme => {
    return createStyles({
        root: {

        },
        height: {
            height: '100%'
        },
        flexGrow: {
            flexGrow: 1
        },
        notificationAvatar: {
            height: '20px',
            width: '20px'
        },
        brandContainer: {
            width: '200px'
        },
        brandLogo: {
            margin: '3px 10px'
        }
    })
}

const mapDispatchToProps = {
    toggleSidebar: actionCreators[TOGGLE_SIDEBAR]
}

export default connect(
    null,
    mapDispatchToProps,
    null,
    { pure: false }
)(withStyles(styles, { withTheme: true })(Navbar))