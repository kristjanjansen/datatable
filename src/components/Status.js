import React from 'react'

import { colors } from '../styles'

const styles = {
    running: {
        width: '5rem',
        color: colors.green
    },
    done: {
        width: '5rem',
        color: colors.gray
    }
}

const Status = ({status}) =>
    <div style={styles[status]}>
        {status}
    </div>

export default Status
