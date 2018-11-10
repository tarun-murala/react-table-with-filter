import React, { Component, PropTypes } from 'react';

class TestCaseFilter extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select>
                {this.props.testClasses.map((element, i) => 
                  (<option value={element} key={i}>{element}</option>)
                )}
            </select>
        );
    }
}

export default TestCaseFilter;
