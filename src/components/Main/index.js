import React from 'react'
import styled from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Contacts from '../Contacts'

const Container = styled('div')`
margin-left: ${props => props.shift ? '280px' : '0'};
transition: ${({ theme }) => theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
})};
`

function Main({ showSidebar, theme }) {

    return (
        <Container shift={showSidebar} theme={theme}>
            <Route path='/' exact component={Contacts} />
        </Container>
    )
}

const mapStateToProps = ({ showSidebar }) => ({ showSidebar })


export default connect(
    mapStateToProps,
    null, null,
    { pure: false }
)(withTheme()(Main))