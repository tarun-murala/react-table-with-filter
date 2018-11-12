import React, { Component, PropTypes } from 'react';

class SourceClassFilter extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into SourceClassFilter -> " + this.props.onChangeSourceClass);
        return (
            <div className="form-group col-md-4">
                <label htmlFor="sourceClass">Source Class: </label>
                <select className="form-control" 
                    onChange={(e) => {
                        this.props.onChangeSourceClass(e.target.value)
                        }
                    }>
                {this.props.sourceClasses.map((element, i) => 
                (<option value={element} key={i}>{element}</option>)
                )}
                </select>
            </div>
        );
    }
}

export default SourceClassFilter;
