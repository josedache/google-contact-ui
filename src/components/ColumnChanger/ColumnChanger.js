import React from 'react'
import ReactDOM from 'react-dom'
import Column from './Column'
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Container = styled.div`
display: flex;
align-items: center;
`

const ColumnContainer = styled.div`
position: relative;
width: 280px;
height: 40px;
margin-left: 15px;
`
const ModalContent = styled.div`
outline: none;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`

const ColumnNumber = styled.div`
`

const DraggedImgContainer = styled(ColumnContainer)`
position: absolute;
margin-left: 0;
`

const DraggedEl = styled('div')`
position: absolute;
display: flex;
align-items: center;
width: 100%;
height: 100%;
z-index: 3000;
`

class ColumnChanger extends React.Component {

    constructor(props) {
        super(props)

        this.clone = React.createRef()

        this.state = {
            defaultColumns: [
                "Name", "Email", "Phone number",
                "Labels", "Job title & company",
                "Address", "Birthday"
            ],
            defaultColumnOrder: [
                "Name", "Email", "Phone number",
                "Job title & company", "Labels"
            ],
            columnOrder: [...props.columnOrder],
            dragged: null,
            hovered: null,
            showSelection: 0,
        }
    }

    onDrag = (i, e) => {
        // default action Continue the drag & drop operation.
        // e.persist()
        let ev = window.event

        this.setState(({ pposx, pposy }) => {
            let clone = this.clone.current

            // console.log(clone.offsetTop, clone.offsetParent, clone.offsetLeft)
            clone.style.left = (clone.offsetLeft + (ev.clientX - pposx)) + 'px'
            clone.style.top = (clone.offsetTop + (ev.clientY - pposy)) + 'px'

            return {
                pposx: ev.clientX,
                pposy: ev.clientY
            }
        })
    }

    onDragStart = (i, e) => {
        // Default Action	Initiate the drag-and-drop operation.
        let ev = window.event.srcElement


        // console.log('onDragStart', i)
        // to enable firefox to listen to drag event
        e.dataTransfer.setData('application/node type', e)


        let draggedImg = document.getElementById('dragged-img')
        let { offsetParent } = ev.parentElement
        // console.log(draggedImg.offsetTop, offsetParent, ev.parentElement, ev.parentElement.offsetTop)


        draggedImg.style.top = (ev.parentElement.offsetTop + offsetParent.offsetTop) + 'px'
        draggedImg.style.left = (offsetParent.offsetLeft + ev.parentElement.offsetLeft) + 'px'



        this.setState({ dragged: i, pposx: e.clientX, pposy: e.clientY })
    }

    onDragEnter(i, e) {
        // default action Reject immediate user selection as potential target element.
        e.preventDefault()

        /* this.setState(({columns, dragged }) => {
            if (i !== dragged) {
                console.log('onDragEnter', i, dragged)
                // return { hovered: i }
                let col = [...columns]
                let del = col.splice(dragged, 1, col[i])
                let newDragged = col.splice(i, 1, ...del)
                // console.log(i, del)
                return { columns: col, dragged: i, hovered: null }
            }
        }) */
        // if (this.state.dragged !== i) 
        // console.log('onDragEnter', i)


        this.setState(({ columnOrder, dragged }) => {
            if (i && i !== dragged) {
                let col = [...columnOrder]
                col.splice(i, 0, ...col.splice(dragged, 1))
                return { columnOrder: col, dragged: i, hovered: null }
            }
        })

    }

    onDragOver = (i, e) => {
        // Default Action	Reset the current drag operation to "none".
        e.preventDefault()
        // if (this.state.dragged !== i)
        // console.log('onDragOver')

    }

    onDragLeave = (i, e) => {
        console.log('onDragLeave', i)


    }

    onDrop = (i, e) => {
        // default action (open as link for some elements)
        e.preventDefault()
        console.log('onDrop')

    }

    onDragEnd = (i, e) => {
        // let ev = window.event
        console.log('onDragEnd')
        this.setState({ dragged: -1 })
    }

    select = (option, index) => {
        console.log(option, index)
        this.setState((state) => {
            let columnOrder = state.columnOrder
            columnOrder.splice(index, 1, option)
            return { columnOrder }
        })
    }

    resetColumns = event => this.setState(({ defaultColumnOrder }) => ({ columnOrder: [...defaultColumnOrder] }))

    render() {
        const { classes, showColumnChanger, toggleShowColumnChanger, changeColumnOrder } = this.props
        const { columnOrder, defaultColumns, dragged } = this.state
        return (
            <Modal open={showColumnChanger} className={classes.modal} onClose={toggleShowColumnChanger}>
                <ModalContent>
                    <DraggedImgContainer id="dragged-img" />
                    <Card className={classes.card}>
                        <CardHeader title='Column changer'
                            subheader='Choose columns to show and drag to change order. Small screens may not display all columns.' />
                        <CardContent>
                            {columnOrder.map((column, columnIndex) => {
                                return (
                                    <Container key={column}>
                                        <ColumnNumber>
                                            {columnIndex + 1}
                                        </ColumnNumber>
                                        <ColumnContainer>
                                            <Column {...{ defaultColumns, columnOrder, column, columnIndex, dragged }} select={this.select} parent={this} />
                                            {columnIndex === dragged &&
                                                ReactDOM.createPortal(
                                                    <Column draggedImg ref={this.clone} {...{ defaultColumns, columnOrder, column, columnIndex, dragged }} select={this.select} parent={this} />,
                                                    document.getElementById('dragged-img')
                                                )
                                            }
                                            {columnIndex ? (
                                                <DraggedEl id={column} draggable
                                                    onDrag={this.onDrag.bind(this, columnIndex)}
                                                    onDrop={this.onDrop.bind(this, columnIndex)}
                                                    onDragStart={this.onDragStart.bind(this, columnIndex)}
                                                    onDragOver={this.onDragOver.bind(this, columnIndex)}
                                                    onDragEnter={this.onDragEnter.bind(this, columnIndex)}
                                                    onDragLeave={this.onDragLeave.bind(this, columnIndex)}
                                                    onDragEnd={this.onDragEnd.bind(this, columnIndex)} />
                                            ) : null}
                                        </ColumnContainer>
                                    </Container>
                                )
                            })}
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.resetColumns}>Reset</Button>
                            <Button onClick={toggleShowColumnChanger} className={classes.autoMarginLeft}>Cancel</Button>
                            <Button onClick={() => {changeColumnOrder(columnOrder); toggleShowColumnChanger() }}>Done</Button>
                        </CardActions>
                    </Card>
                </ModalContent>
            </Modal>
        )
    }
}

export default ColumnChanger