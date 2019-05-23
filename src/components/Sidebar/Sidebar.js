import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'


import PersonOutline from '@material-ui/icons/PersonOutline'
import HistoryOutlined from '@material-ui/icons/HistoryOutlined'
import FilterNoneOutlined from '@material-ui/icons/FilterNoneOutlined'
import LabelOutlined from '@material-ui/icons/LabelOutlined'
import AddOutlined from '@material-ui/icons/AddOutlined'
import CloudeDownload from '@material-ui/icons/CloudDownloadOutlined'
import PrintOutlined from '@material-ui/icons/PrintOutlined'
import UndoOutlined from '@material-ui/icons/UndoOutlined'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined'
import GetAppOutlined from '@material-ui/icons/GetAppOutlined'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'
import FeedbackOutlined from '@material-ui/icons/FeedbackOutlined'
import HelpOutlined from '@material-ui/icons/HelpOutlineOutlined'
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined'

const PaperProps = ({ paperProps }) => ({
    elevation: 0,
    classes: {
        root: paperProps,
    }
})

const CreateContainer = styled.div`
padding: 15px 5px;
background-color: white;
position: sticky;
top: 0;
z-index: 2;
`

class Sidebar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMore: false,
            showLabels: false
        }
    }

    render() {
        const { classes, showSidebar } = this.props
        const { showMore, showLabels } = this.state
        return (
            <Drawer open={showSidebar} variant="persistent" PaperProps={PaperProps(classes)}>
                <CreateContainer>
                    <Fab variant='extended' className={classes.createButton}>
                        <Typography>Create contact</Typography>
                    </Fab>
                </CreateContainer>
                <List>
                    <ListItem component={NavLink} to='/' className={classes.listItemLink}>
                        <ListItemIcon>
                            <PersonOutline />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                        <Typography>1000</Typography>
                    </ListItem>
                    <ListItem component={NavLink} to='/frequent' className={classes.listItemLink}>
                        <ListItemIcon>
                            <HistoryOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Frequently contacted" />
                    </ListItem>
                    <ListItem component={NavLink} to='/merge' className={classes.listItemLink}>
                        <ListItemIcon>
                            <FilterNoneOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Duplicates" />
                    </ListItem>
                    <Divider />

                    <ListItem onClick={() => this.setState(({ showLabels }) => ({ showLabels: !showLabels }))} className={classes.listItemLink}>
                        <ListItemIcon>
                            {showLabels ? <ExpandLess /> : <ExpandMore />}
                        </ListItemIcon>
                        <ListItemText primary="Labels" />
                    </ListItem>
                    <Collapse in={showLabels} timeout='auto'>
                        {[1, 2, 3].map((label, key) => (
                            <ListItem key={key} className={classes.listItemLink}>
                                <ListItemIcon>
                                    <LabelOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Duplicates" />
                                <Typography>1000</Typography>
                                {/* secondary actions on hover */}
                            </ListItem>
                        ))}
                        <ListItem className={classes.listItemLink}>
                            <ListItemIcon>
                                <AddOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Create label" />
                        </ListItem>
                    </Collapse>
                    <Divider />

                    <ListItem onClick={() => this.setState(({ showMore }) => ({ showMore: !showMore }))} className={classes.listItemLink}>
                        <ListItemIcon>
                            {showMore ? <ExpandLess /> : <ExpandMore />}
                        </ListItemIcon>
                        <ListItemText primary="More" />
                    </ListItem>
                    <Collapse in={showMore} timeout='auto'>
                        <ListItem className={classes.listItemLink}>
                            <ListItemIcon>
                                <GetAppOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Import" />
                        </ListItem>
                        <ListItem className={classes.listItemLink}>
                            <ListItemIcon>
                                <CloudeDownload />
                            </ListItemIcon>
                            <ListItemText primary="Export" />
                        </ListItem>
                        <ListItem className={classes.listItemLink}>
                            <ListItemIcon>
                                <PrintOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Print" />
                        </ListItem>
                        <ListItem className={classes.listItemLink}>
                            <ListItemIcon>
                                <UndoOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Undo changes" />
                        </ListItem>
                    </Collapse>
                    <Divider />

                    <ListItem className={classes.listItemLink}>
                        <ListItemIcon>
                            <ArchiveOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Other contacts" />
                    </ListItem>
                    <ListItem className={classes.listItemLink}>
                        <ListItemIcon>
                            <SettingsOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <ListItem className={classes.listItemLink}>
                        <ListItemIcon>
                            <FeedbackOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Send feedback" />
                    </ListItem>
                    <ListItem className={classes.listItemLink}>
                        <ListItemIcon>
                            <HelpOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                    </ListItem>
                    <ListItem className={classes.listItemLink}>
                        <ListItemIcon>
                            <ExitToAppOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Switch to old version" />
                    </ListItem>

                </List>
            </Drawer>
        )
    }
}

export default Sidebar