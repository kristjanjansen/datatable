import React, { Component } from 'react'
import BodyStyle from 'body-style'
import WebfontLoader from '@dr-kobros/react-webfont-loader';

import Row from './components/Row'
import Chart from './components/Chart'
import Number from './components/Number'

const data = [
    {id: 'a', name: 'Devin', values: [1.21,2.1,3.3]},
    {id: 'b', name: 'Gabe', values: [3.33,1.21,2.45]},
    {id: 'c', name: 'Kim', values: [3.1,1.41,4.1]},
]

export default class App extends Component {

    render() {
        return (
            <WebfontLoader config={fonts}>
                <BodyStyle style={styles.body}>
                    <div style={styles.container}>
                        {data.map(row => {
                            return <Row key={row.id} row={row}>
                                <Number number={row.values[0]} />
                                <Chart values={row.values} />
                            </Row>
                        })}
                    </div>
                </BodyStyle>
            </WebfontLoader>
        )
    }

}

const fonts = {
  google: {
    families: ['Roboto Mono:300,600'],
  }
}

const styles = {
    body: {
        background: '#222',
        color: 'white',
        fontFamily: 'Roboto Mono',
        lineHeight: '1.5em',
        margin: 0,
        padding: 0,
    },
    container: {
        padding: '2rem'
    }
}