import React, { Component, PropTypes } from 'react';

class SourceRow extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var testName = this.props.testName;
        var sourceName = this.props.sourceName;
        var testMethods = this.props.testMethods;
        console.log("testName -> " + testName);
        console.log("sourceName -> " + sourceName);
        console.log("testMethods -> " + testMethods);
        return (
            <tr>
                <td>{testName}</td>
                <td>{sourceName}</td>
                <td>{testMethods}</td>
            </tr>
        );
    }
}

export default SourceRow;
