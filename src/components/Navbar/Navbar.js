import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/gcontact-logo.png'

import Search from './Search'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Menu from '@material-ui/icons/Menu'
import Apps from '@material-ui/icons/Apps'
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';



const AppBarOverride = styled(AppBar)`
&& {
    box-shadow: none;
    height: 64px;
    padding: 0 12px;
    background-color: inherit;
    z-index: ${props => props.theme.zIndex.drawer + 1};
}
`

const NotificationAvatar = styled(Avatar)`
&& {
    height: 20px;
    width: 20px;
}

`

const UserAvatar = styled(Avatar)`
&& {
    height: 30px;
    width: 30px;
}
`


class Navbar extends Component {

    render() {
        const { classes, theme, toggleSidebar } = this.props
        return (
            <>
                <AppBarOverride theme={theme} position='static'>
                    <Grid container alignItems="center" wrap="nowrap" className={classes.height}>
                        <Grid item onClick={toggleSidebar}>
                            <IconButton>
                                <Menu />
                            </IconButton>
                        </Grid>
                        <Grid container alignItems='center' item className={classes.brandContainer}>
                            <Avatar src={Logo} alt='Logo' className={classes.brandLogo} />
                            <Typography>Contacts</Typography>
                        </Grid>
                        <Grid item className={classes.flexGrow}>
                            <Search />
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Apps />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <NotificationAvatar>
                                    <Notifications fontSize='small' />
                                </NotificationAvatar>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <UserAvatar src={null}>
                                    J
                                </UserAvatar>
                            </IconButton>
                        </Grid>
                    </Grid>
                </AppBarOverride>
            </>
        )
    }
}


export default Navbar