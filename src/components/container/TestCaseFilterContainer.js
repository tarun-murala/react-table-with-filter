import React, { Component, PropTypes } from 'react';
import TestCaseFilter from '../ui/TestCaseFilter';

class TestCaseFilterContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into TestCaseFilterContainer Render() -> " + JSON.stringify(this.props.testClasses));
        return (
            <TestCaseFilter testClasses={this.props.testClasses} />
        );
    }
}

export default TestCaseFilterContainer;
