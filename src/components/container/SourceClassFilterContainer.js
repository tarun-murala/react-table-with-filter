import React, { Component, PropTypes } from 'react';
import SourceClassFilter from '../ui/SourceClassFilter';

class SourceClassFilterContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Into SourceClassFilterContainer Render() -> " + JSON.stringify(this.props.sourceClasses));
        return (
            <SourceClassFilter sourceClasses={this.props.sourceClasses} 
                onChangeSourceClass={this.props.onChangeSourceClass}
                value={this.props.value} />
        );
    }
}

export default SourceClassFilterContainer;
