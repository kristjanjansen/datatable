import React, { Component } from 'react'

export default class Number extends Component {

    render() {
        const {number} = this.props

        return (
            <div style={styles.number}>
                {[].map.call(String(number), (char, index) => {
                    return <span key={index} style={{color: 'yellow', opacity: 1 / index}}>
                        {char}
                    </span>
                })}
            </div>
        )
    }

}

const styles = {
    number: {
        width: '3rem',
    }
}
