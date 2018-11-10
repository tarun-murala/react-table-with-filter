import React, { Component, PropTypes } from 'react';
import Table from '../ui/Table';

class TableContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        console.log("Into TableContainer Render() -> " + JSON.stringify(this.props.testClasses));
        return (
            <Table testClasses={this.props.testClasses} />
        );
    }
}

export default TableContainer;
