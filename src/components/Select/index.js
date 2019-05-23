import React from 'react'
import styled from 'styled-components'

import { withStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import ArrowDropDown from '@material-ui/icons/ArrowDropDown'




const Container = styled.div`
position: relative;
/* width: 100%; */
flex: 1;
`

class Select extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            hovered: props.selected
        }
    }

    handleClickAway = event => {
        console.log('clickaway')
        this.setState({ open: false })
    }

    openOption = event => {
        this.setState(({ open }) => ({ open: !open }))
    }

    onMouseOver = hovered => this.setState({ hovered })

    render() {
        const { classes, selected, options, onClick } = this.props
        const { open, hovered } = this.state
        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <Container>
                    <Button onClick={this.openOption} className={classes.button}>
                        {selected}
                        <ArrowDropDown />
                    </Button>
                    <Divider />
                    {open ? (
                        <Paper className={classes.paper}>
                            {options.map((option, optionIndex) => {
                                return (
                                    <Button onClick={(e) => onClick(option, optionIndex)} key={option} onMouseOver={() => this.onMouseOver(option)}
                                        className={option === hovered ? [classes.button, classes.active].join(' ') : classes.button}>
                                        {option}
                                    </Button>
                                )
                            })}
                        </Paper>
                    ) : null}
                </Container>
            </ClickAwayListener>
        )
    }
}

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
    active: {
        backgroundColor: '#eeeeee'
    }
})

export default withStyles(styles)(Select) 