import React from 'react'
import Column from './Column'
import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = theme => createStyles({
    paper: {
        position: 'absolute',
        width: '100%',
        top: '100%',
        zIndex: 3,
        borderRadius: 0,
        padding: '5px 0'
    },
    button: {
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: 0,
        margin: '2px 0'
    },
    nameColumn: {
        cursor: 'initial',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    active: {
        backgroundColor: '#eeeeee'
    }
})

const ColumnWithStyle = withStyles(styles)(Column)
export default React.forwardRef((props, ref) => <ColumnWithStyle {...props} forwardedRef={ref} />)