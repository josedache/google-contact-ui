import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import EditOutlined from '@material-ui/icons/EditOutlined'
import MoreVert from '@material-ui/icons/MoreVert'
import CheckboxOutlined from '@material-ui/icons/CheckBoxOutlined'
import CheckboxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'

const UserImgContainer = styled.div`
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
width: 70px;
height: 40px;
& > div {
    z-index: 2;
    /* position: absolute !important; */
}

& > svg {
    position: absolute;
}
`

function Contact({ columnOrder, checked, contact, contactIndex, transform, height, toggleCheckbox, showDetails, classes }) {
    return (
        <Grid container className={classes.tr} style={{ transform, height }} alignItems='center'>
            {columnOrder.map((column, index) => {
                return (
                    <Grid container alignItems='center' item xs={index ? true : 3} className={classes.td} key={column}>
                        {!index && (
                            <UserImgContainer>
                                {checked.includes(contactIndex) ? <CheckboxOutlined /> : <CheckboxOutlineBlank />}
                                <Avatar className='user-img' />
                            </UserImgContainer>
                        )}
                        <Typography inline>
                            {contact[column]}
                        </Typography>
                    </Grid>
                )
            })}
            <Grid item xs={2} className={classes.actionButtons}>
                <IconButton className={classes.iconButton} disableRipple>
                    {contact.bookmarks ? <Star /> : <StarBorder />}
                </IconButton>
                <IconButton className={classes.iconButton} disableRipple>
                    <EditOutlined />
                </IconButton>
                <IconButton className={classes.iconButton} disableRipple>
                    <MoreVert />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Contact;