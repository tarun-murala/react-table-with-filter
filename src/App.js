import React, { Component, PropTypes } from 'react';
import BootstrapIncludes from './components/ui/BootstrapIncludes';
import TableContainer from './components/container/TableContainer';
import TableFilterContainer from './components/container/TableFilterContainer';
import filterByTestCaseAction from './actions/FilterByTestCaseAction';
import filterBySourceClassAction from './actions/FilterBySourceClassAction';

import {connect} from 'react-redux';
import store from './store/index'

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
        const unsubscriber = store.subscribe(() => 
                console.log("Into App -> Action dispatched - New state => " + JSON.stringify(store.getState()))
        );
    }

    getTestClasses() {
        let allTestClasses = this.props.testClasses;
        var testClasses = [];
        for(var testClass in allTestClasses) {
            let sourceClassWithMethods = allTestClasses[testClass];
            for(var sourceClass in sourceClassWithMethods) {
                let testMethods = sourceClassWithMethods[sourceClass];
                for(var i=0; i<testMethods.length; i++) {
                    testClasses.push({
                        testClass: testClass,
                        sourceClass: sourceClass,
                        testMethod: testMethods[i]
                    })
                }
            }
        }
        return testClasses;
    }

    render() {
        console.log("Into App Render() -> " + JSON.stringify(this.props.testClasses));
        var testClasses = this.getTestClasses();
        return (
            <div className="App">
                  <TableFilterContainer testClasses={this.props.testClasses} 
                            onChangeTestClass={this.props.onChangeTestClass} 
                            onChangeSourceClass={this.props.onChangeSourceClass} />
                  <TableContainer testClasses={testClasses}/>
            </div> 
        );
    }
}

const mapStateToProps = state => ({
    testClasses: state.testClasses
})

const mapDispatchToProps = dispatch => {
    return {
        onChangeTestClass: testClass => {
            dispatch(filterByTestCaseAction(testClass));
        },
        onChangeSourceClass: sourceClass => {
            dispatch(filterBySourceClassAction(sourceClass));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);