import React from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles'
import Checked from './Checked'
import Column from './Column'

const styles = theme => createStyles({
    tr: {
        height: '50px',
        borderBottom: '1px solid lightgrey',
        marginBottom: '10px',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 2,
    },
    td: {

    },
    actionButtons: {
        textAlign: 'right'
    },
    iconButton: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
})

const Header = ({ checked, columnOrder, classes, toggleShowColumnChanger }) => (checked.length ? <Checked {...{ classes }} /> : <Column {...{ columnOrder, classes, toggleShowColumnChanger }} />)

export default withStyles(styles)(Header)