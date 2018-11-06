import React, { Component, PropTypes } from 'react';
import SourceRow from './SourceRow';

class TestRow extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var testName = this.props.testName;
        var entries = this.props.entries;
        var rows =[];
        entries.forEach((element, i) =>  {
            console.log(element);
            rows.push(
                <SourceRow testName={testName} sourceName={element[0]}
                    testMethods={element[1]} key={i}/>
        )
        });
        return (
            <tbody>{rows}</tbody>
        );
    }
}

export default TestRow;
