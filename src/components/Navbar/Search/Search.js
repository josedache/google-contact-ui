import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'

import SearchOutlined from '@material-ui/icons/SearchOutlined'
import Close from '@material-ui/icons/Close'




class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchText: ''
        }
    }

    findContacts = e => {
        this.setState({searchText: e.target.value})
    }

    render() {
        const { classes } = this.props
        const { searchText } = this.state
        return (
            <Paper className={classes.root}>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <InputBase className={classes.input} placeholder="Search" onChange={this.findContacts} />
                {searchText.length ? (
                    <IconButton >
                        <Close />
                    </IconButton>
                ) : null}
            </Paper>
        )
    }
}

export default Search