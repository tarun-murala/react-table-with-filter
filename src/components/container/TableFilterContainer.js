import React, { Component, PropTypes } from 'react';
import TableFilter from '../ui/TableFilter';

class TableFilterContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    getTestClassesAndSourceClasses(testClasses) {
        let testAndSources = {testClasses: [], sourceClasses: []};
        for(var testClass in this.props.testClasses) {
            testAndSources.testClasses.push(testClass);
            var sourceClasses = this.props.testClasses[testClass];
            for(var sourceClass in sourceClasses) {
                if(testAndSources.sourceClasses.indexOf(sourceClass) == -1) {
                    testAndSources.sourceClasses.push(sourceClass);
                }
            }
        }
        return testAndSources;
    }

    render() {
        console.log("Into TableFilteContainer Render() -> " + JSON.stringify(this.props.testClasses));
        let {testClasses, sourceClasses} = this.getTestClassesAndSourceClasses();
        return (
            <TableFilter testClasses={testClasses} sourceClasses={sourceClasses} />
        );
    }
}

export default TableFilterContainer;
