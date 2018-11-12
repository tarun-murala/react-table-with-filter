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
        console.log("Dispatch Actions -> " + this.props.onChangeTestClass + 
            " | " + this.props.onChangeSourceClass);
        return (
            <div className="form-row">
                <TestCaseFilterContainer testClasses={this.props.testClasses} 
                            onChangeTestClass={this.props.onChangeTestClass} />
                <SourceClassFilterContainer sourceClasses={this.props.sourceClasses} 
                            onChangeSourceClass={this.props.onChangeSourceClass} />
            </div>
        );
    }
}

export default TableFilter;
