import React, { Component } from 'react';
import ApiConnector from '../connectors/ApiConnector';
import {Table, TableHeader, TableCell, TableBody, DataTableCell} from '@david.kucsai/react-pdf-table';

class AlumniTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alumni_data :[]
        }
    }

    componentWillMount() {
        this.setState((prevState, props) => {
            prevState["alumni_data"] = new ApiConnector().fetchData("/api/alumni");
            return prevState;
        });
    }
    
    render() {
        return (
            <div>
                <Table
                    data={this.state["alumni_data"]}>
                    <TableHeader>
                        <TableCell>
                            Name of Student
                        </TableCell>
                        <TableCell>
                            Designation
                        </TableCell>
                        <TableCell>
                            Batch Year
                        </TableCell>
                        <TableCell>
                            Company Name
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell getContent={(r) => r.name}/>
                        <DataTableCell getContent={(r) => r.designation}/>
                        <DataTableCell getContent={(r) => r.batch}/>
                        <DataTableCell getContent={(r) => r.company}/>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default AlumniTable;