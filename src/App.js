import React, { Component, PropTypes } from 'react';
import BootstrapIncludes from './components/ui/BootstrapIncludes';
import TableContainer from './components/container/TableContainer';
import TableFilterContainer from './components/container/TableFilterContainer';
import {connect} from 'react-redux';

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    getTestClasses() {
        let state = this.props.testClasses;
        var testClasses = [];
        for(var testClass in state) {
            let sourceClassWithMethods = state[testClass];
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
                  <TableFilterContainer testClasses={this.props.testClasses} />
                  <TableContainer testClasses={testClasses} />
            </div> 
        );
    }
}

const mapStateToProps = state => ({
    testClasses: state.testClasses
})

export default connect(mapStateToProps)(App);