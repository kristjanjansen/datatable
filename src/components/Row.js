import React, { Component } from 'react'

export default class Row extends Component {

    render() {
        const {row, children} = this.props
        return (
            <div style={styles.row}>
                <div style={styles.name}>{this.generateId()}</div>
                <div style={styles.name}>{row.name}</div>
                {children}
            </div>
        )
    }

    generateId() {
        return Math.floor(Math.random()*16777215).toString(16);
    }

}

const styles = {
    row: {
        display: 'flex',
        alignItems: 'center'
    },
    name: {
        width: '5rem',
    }
}