import React, { Component, PropTypes } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table  className="table table-bordered table-striped table-hover"
                        id="table" 
                        data-toggle="table"
                        data-search="true"
                        data-filter-control="true" 
                        data-show-export="true"
                        data-click-to-select="true"
                        data-toolbar="#toolbar">
                    <thead>
                        <tr>
                            <th scope="col" data-field="testName" data-filter-control="input" data-sortable="true">Test Name</th>
                            <th scope="col" data-field="sourceClass" data-filter-control="input" data-sortable="true">Source Class</th>
                            <th scope="col" data-field="methodName" data-filter-control="input" data-sortable="true">Method Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.testClasses.map((entry, i) =>
                            (<TableRow testClass={entry.testClass} sourceClass={entry.sourceClass} testMethod={entry.testMethod} key={i}/>)
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
