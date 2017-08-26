import React, { Component } from 'react'

import { colors } from '../styles'

export default class Number extends Component {

    render() {
        const {number,color} = this.props

        return (
            <div style={styles.number}>
                {[].map.call(String(number), (char, index) => {
                    return <span key={index} style={{color: colors[color], opacity: 1.5 / index}}>
                        {char}
                    </span>
                })}
            </div>
        )
    }

}

Number.defaultProps = {
    color: 'white'
}

const styles = {
    number: {
        width: '2.5rem',
    }
}
