import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Contact from './Contact'
import ColumnChanger from '../ColumnChanger'


const Container = styled.div`
height: 93vh; 
overflow-y: auto;
overflow-x: hidden;
padding: 0 16px 16px;
`

const Content = styled.div`
position: relative;
height: ${props => props.height};
`

class Contacts extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showColumnChanger: false,
            dropdown: '',
            contentHeight: null,
            contactHeight: 56,
            scrollTop: 0,
            checked: [],
            showContactDetails: false,
            contactDetails: {}
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            contentHeight: props.contacts.length * state.contactHeight,
        };
    }

    toggleShowColumnChanger = () => this.setState(({ showColumnChanger }) => ({ showColumnChanger: !showColumnChanger, dropdown: '' }))

    toggleOptions = (e) => {
        e.stopPropagation()
        this.setState(({ showOptions }) => ({ showOptions: !showOptions }))
    }

    toggleDropdown = (dd, e) => {
        window.event.stopPropagation()
        this.setState(({ dropdown }) => {
            if (dd === dropdown && dropdown === 'column_changer') {
                return { dropdown: '' }
            }
            return { dropdown: dd }
        })
    }

    toggleCheckbox = (index, e) => {
        this.setState(({ checked }) => {
            let newChecked = [...checked]
            if (newChecked.includes(index)) {
                newChecked.splice(newChecked.indexOf(index), 1)
                return { checked: newChecked }
            } else {
                newChecked.push(index)
                return { checked: newChecked }
            }
        })
    }

    toggleContactDetails(index, e) {
        this.setState(({ showContactDetails, contactDetails }, { contacts }) => {
            return {
                showContactDetails: !showContactDetails,
                contactDetails: contacts[index]
            }
        })
    }

    closeAllDropDowns = () => {
        // this.setState({ showOptions: false, showDropDown: '' })
    }

    onScroll = () => {
        let scrollTop = window.event.srcElement.scrollTop
        this.setState({ scrollTop })
    }

    render() {
        const { checked, scrollTop, contentHeight, contactHeight, showColumnChanger } = this.state
        const { contacts, columnOrder } = this.props
        return (
            <Container onScroll={this.onScroll} >
                <Header {...{ columnOrder, checked, }} toggleShowColumnChanger={this.toggleShowColumnChanger} />
                <Content height={contentHeight + 'px'}>
                    {contacts.map((contact, contactIndex) => {
                        let show = contactIndex * contactHeight
                        // if the contact (index and height) is btw this position
                        if (show >= (scrollTop - (contactHeight * 3)) && show <= ((contactHeight * 16) + scrollTop))
                            return (
                                <Contact key={contactIndex} contact={contact} height={contactHeight} {...{ columnOrder, checked }}
                                    transform={`translateY(${show}px)`} />
                            )
                        return null
                    })}
                </Content>
                <ColumnChanger {...{ showColumnChanger, columnOrder }} toggleShowColumnChanger={this.toggleShowColumnChanger} />
            </Container>
        )
    }
}

export default Contacts