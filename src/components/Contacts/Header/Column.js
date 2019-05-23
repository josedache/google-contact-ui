import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import MoreVert from '@material-ui/icons/MoreVert'
import TableChartOutlined from '@material-ui/icons/TableChartOutlined'

const MoreContainer = styled.div`
position: relative;

.option {
    position: absolute;
    width: 100%;
    right: 50px;
    top: 75%;
}
`

class Column extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option: false
        }
    }

    closeOption = event => {
        this.setState({ option: false })
    }

    render() {
        const { columnOrder, classes, toggleShowColumnChanger } = this.props
        const { option } = this.state
        return (
            <Grid container className={classes.tr}>
                {columnOrder.map((column, index) => (
                    <Grid key={index} item xs={index ? true : 3}>
                        <Typography>
                            {column}
                        </Typography>
                    </Grid>
                ))}
                <Grid item xs={2} className={classes.actionButtons}>
                    <MoreContainer>
                        <IconButton className={classes.iconButton} onClick={() => this.setState(({ option }) => ({ option: !option }))}>
                            <MoreVert />
                        </IconButton>
                        {option && (
                            <Paper className='option' elevation={6}>
                                <ClickAwayListener onClickAway={this.closeOption}>
                                    <MenuList>
                                        <MenuItem onClick={toggleShowColumnChanger}>
                                           <ListItemIcon>
                                               <TableChartOutlined />
                                           </ListItemIcon>
                                           <ListItemText primary='Change column order'/>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        )}
                    </MoreContainer>
                </Grid>
            </Grid>
        )
    }
}

export default Column