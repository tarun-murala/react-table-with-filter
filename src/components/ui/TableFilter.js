import React, { Component, PropTypes } from 'react';
import TestCaseFilterContainer from '../container/TestCaseFilterContainer';
import SourceClassFilterContainer from '../container/SourceClassFilterContainer';

class TableFilter extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into TableFilter Render(): testClasses -> " + JSON.stringify(this.props.testClasses) + 
    " | sourceClasses -> " + JSON.stringify(this.props.sourceClasses));
        return (
            <div>
                <TestCaseFilterContainer testClasses={this.props.testClasses} />
                <SourceClassFilterContainer sourceClasses={this.props.sourceClasses} />
            </div>
        );
    }
}

export default TableFilter;
