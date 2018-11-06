import React, { Component, PropTypes } from 'react';
import TestRow from './TestRow'

class TableRow extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var testName = this.props.testName;
        var mapping = this.props.mapping;
        var key = this.props.key;
        var entries = Object.entries(mapping)
        return ( 
            <TestRow  testName={testName} entries={entries} key={key}/>
        );
    }
}

export default TableRow;
