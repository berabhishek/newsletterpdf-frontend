import React, { Component } from 'react'
import {Table, TableHeader, TableCell, TableBody, DataTableCell} from '@david.kucsai/react-pdf-table';
import ApiConnector from '../connectors/ApiConnector';

class LectureView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lectures: []
        }
    }

    componentWillMount() {
        this.setState((prevState, props) => {
            let lectures = new ApiConnector().fetchData("/api/lecture");
            lectures.forEach((lecture, iterator) => {
                lectures["id"] = iterator + 1;
            });
            prevState["lectures"] = lectures;
            return prevState;
        });
    }
    
    render() {
        return (
            <div>
                <Table
                    data={this.state["lectures"]}>
                    <TableBody>
                        <DataTableCell weighting={0.1} getContent={(r) => r.id}/>
                        <DataTableCell getContent={(r) => r.lecture}/>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default LectureView