import React, { Component, PropTypes } from 'react';

class SourceClassFilter extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select>
            {this.props.sourceClasses.map((element, i) => 
              (<option value={element} key={i}>{element}</option>)
            )}
        </select>
        );
    }
}

export default SourceClassFilter;
