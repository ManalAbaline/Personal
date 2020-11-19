import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <p>{this.props.line1} <br/> {this.props.line2} <br/> {this.props.line3}<br/>{this.props.line4}<br/>{this.props.line5}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;