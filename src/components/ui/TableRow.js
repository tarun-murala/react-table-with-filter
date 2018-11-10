import React, { Component, PropTypes } from 'react';

class TableRow extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <tr>
                <td>{this.props.testClass}</td>
                <td>{this.props.sourceClass}</td>
                <td>{this.props.testMethod}</td>
            </tr>
        );
    }
}

export default TableRow;
