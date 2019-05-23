import Contacts from './Contacts'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import actionCreators from '../../store/actions'
import { TOGGLE_SIDEBAR } from '../../store/types'


const styles = createStyles({

})

const mapStateToProps = ({columnOrder, contacts, showSidebar}) => ({columnOrder, contacts, showSidebar})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps,
    null,
    null,
    {pure: false}
)(withStyles(styles)(Contacts))