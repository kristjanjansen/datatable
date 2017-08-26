import React, { Component } from 'react'

const styles = {
    row: {
        display: 'flex',
        alignItems: 'center'
    },
    name: {
        width: '5rem',
    }
}

const Row = ({row, children}) =>
    <div style={styles.row}>
        {children}
    </div>

export default Row