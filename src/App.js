import React, { Component, PropTypes } from 'react';
import BootstrapIncludes from './components/BootstrapIncludes';
import Table from './components/Table';

class App extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into App Render() -> ");
        var initialState = this.props.initialState;
        var testClasses = initialState.testClasses;
        var sourceClasses = initialState.sourceClasses;
        var mapping = initialState.mapping;
        return (
            <div className="App">
                <BootstrapIncludes />
                <header className="App-header">
                  <Table testClasses={testClasses} sourceClasses={sourceClasses} mapping={mapping} />
                </header>
            </div> 
        );
    }
}

export default App;