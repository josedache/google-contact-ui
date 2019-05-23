import ColumnChanger from './ColumnChanger'
import { connect } from 'react-redux'
import actionCreators from '../../store/actions'
import { CHANGE_COLUMN_ORDER } from '../../store/types'

import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = theme => createStyles({
    card: {
        maxWidth: 400,
        maxHeight: '100%',
        outline: 'none',
        overflow: 'visible',
        position: 'relative'
    },
    modal: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    autoMarginLeft: {
        marginLeft: 'auto'
    }
})

const mapDispatchToProps = {
    changeColumnOrder: actionCreators[CHANGE_COLUMN_ORDER]
}


export default connect(null, mapDispatchToProps, null, { pure: false })(withStyles(styles)(ColumnChanger))