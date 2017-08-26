import React, { Component } from 'react'

export default class Row extends Component {

    render() {
        const {row, children} = this.props
        return (
            <div style={styles.row}>
                <div style={styles.name}>{row.name}</div>
                {children}
            </div>
        )
    }

}

const styles = {
    row: {
        display: 'flex',
        alignItems: 'center'
    },
    name: {
        width: '4rem'
    }
}