import React, { Component } from 'react'
import ClipboardButton from 'react-clipboard.js';

const styles = {
    id: {
        width: '4.5rem'
    }
}

class Id extends Component {

    state = {
        copied: false
    }

    onSuccess() {
        this.setState({ copied: true })
        setTimeout(() => this.setState({ copied: false }), 1000)
    }

    render() {
        const { value } = this.props
        const { copied } = this.state
        return (
            <ClipboardButton
                style={styles.id}
                component="div"
                data-clipboard-text={'bla ' + value}
                onSuccess={this.onSuccess.bind(this)}
            >
                {copied ? 'Copied' : value}
            </ClipboardButton>
        )
    }

} 

export default Id
