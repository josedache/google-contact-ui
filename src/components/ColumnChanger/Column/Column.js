import React from 'react'
import styled from 'styled-components'

// import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import DragHandle from '@material-ui/icons/DragHandle'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'


const Container = styled.div`
position: absolute;
display: flex;
align-items: center;
width: 100%;
height: 100%;
/* z-index: 3000; */
/* height: ${({ columnIndex, dragged, draggedImg }) => columnIndex === dragged && draggedImg ? '40px' : '100%'}; */
/* z-index: ${({ columnIndex, dragged, draggedImg }) => columnIndex === dragged && draggedImg ? 3000 : 'initial'}; */
/* background-color: ${({ draggedImg, columnIndex, dragged }) => columnIndex === dragged && draggedImg ? 'blue' : 'initial'}; */
opacity: ${({ columnIndex, dragged, draggedImg }) => columnIndex === dragged ? draggedImg ? 1 : 0 : 1};
`

const DraggedImg = styled(Container)`
background-color: blue;
z-index: 3000;
`
const SelectContainer = styled.div`
position: relative;
flex: 1;
& > button:nth-child(2) {
    position: absolute;
    left: 0;
}
`

class Column extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            hovered: props.column,
        }

    }

    handleClickAway = event => {
        this.setState({ open: false })
    }

    selectOption = (option, columnIndex) => {
        this.props.select(option, columnIndex)
        this.handleClickAway()
    }

    openOption = event => {
        this.setState(({ open }) => ({ open: !open }))
    }

    onMouseOver = hovered => this.setState({ hovered })

    render() {
        const { classes, column, columnIndex, parent, draggedImg, forwardedRef } = this.props
        const { open, hovered } = this.state
        const { defaultColumns, columnOrder, showSelection, dragged } = parent.state
        if (draggedImg)
            return (
                <DraggedImg ref={forwardedRef} {...{ draggedImg, dragged, columnIndex }}>
                    <Button className={classes.button}>
                        {column}
                    </Button>
                    <DragHandle />
                </DraggedImg>
            )
        return (
            <Container {...{ draggedImg, dragged, columnIndex }}
            // draggable={columnIndex ? true : false}
            // onDrag={parent.onDrag.bind(parent, columnIndex)}
            // onDrop={parent.onDrop.bind(parent, columnIndex)}
            // onDragStart={parent.onDragStart.bind(parent, columnIndex)}
            // onDragOver={parent.onDragOver.bind(parent, columnIndex)}
            // onDragEnter={parent.onDragEnter.bind(parent, columnIndex)}
            // onDragLeave={parent.onDragLeave.bind(parent, columnIndex)}
            // onDragEnd={parent.onDragEnd.bind(parent, columnIndex)}
            >
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <SelectContainer>
                        {columnIndex ?
                            (
                                <>
                                    <Button onClick={this.openOption} className={classes.button}>
                                        {column}
                                        <ArrowDropDown />
                                    </Button>
                                    <Divider />
                                </>
                            ) :
                            (
                                <Button className={[classes.button, classes.nameColumn].join(' ')} disableRipple disableTouchRipple>
                                    {column}
                                </Button>
                            )
                        }
                        {open ? (
                            <Paper className={classes.paper}>
                                {defaultColumns.map(option => (
                                    !columnOrder.includes(option) || option === column ?
                                        <Button onClick={e => this.selectOption(option, columnIndex)} key={option} onMouseOver={() => this.onMouseOver(option)}
                                            className={option === hovered ? [classes.button, classes.active].join(' ') : classes.button}>
                                            {option}
                                        </Button>
                                        : null
                                ))}
                            </Paper>
                        ) : null}
                    </SelectContainer>
                </ClickAwayListener>
                {columnIndex ? <DragHandle /> : null}
            </Container >
        )
    }
}

export default Column