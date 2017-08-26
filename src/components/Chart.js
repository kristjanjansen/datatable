import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { line, area } from 'd3-shape'

export default class Chart extends Component {

    render() {
        const { width, height, values } = this.props
        return (
            <svg width={width} height={height}>
                <path d={this.area(values)} fill="rgba(255,255,255,0.2)" />
                <path d={this.line(values)} fill="none" stroke="white" />
            </svg>
        )
    }

    xScale(index) {
        return scaleLinear()
            .domain([0, this.props.values.length - 1])
            .range([0, this.props.width])
            (index)
    }

    yScale(value) {
        return scaleLinear()
            .domain([0, 10])
            .range([this.props.height, 0])
            (value)
    }

    line(values) {
        return line()
            .x((d, index) => this.xScale(index))
            .y(d => this.yScale(d))
            (values)
    }

    area(values) {
        return area()
            .x((d, index) => this.xScale(index))
            .y1(d => this.yScale(d))
            .y0(d => this.yScale(0))
            (values)
    }

} 

Chart.defaultProps = {
    width: 75,
    height: 20,
    values: []
}