import React, { Component, PropTypes } from 'react';

class TestCaseFilter extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into TestCaseFilter -> " + this.props.onChangeTestClass);
        return (
            <div className="form-group col-md-4">
            <label htmlFor="testClass">Test Class: </label>
            <select className="form-control" 
                    onChange={(e) => {
                        this.props.onChangeTestClass(e.target.value)
                        }
                    } >
                {this.props.testClasses.map((element, i) => 
                  (<option value={element} key={i}>{element}</option>)
                )}
            </select>
            </div>
        );
    }
}

export default TestCaseFilter;
