import React from 'react'
import {Table} from 'react-bootstrap';

function Tables({heads, rows}) {
    return (
        <Table striped bordered hover>
            <thead>
             <tr>
                {heads.map(item =>{
                    return <th key={item.key}>{item.label}</th>
                })}
             </tr>
            </thead>

            <tbody>
                {rows.map(item =>{ 
                    return (
                        <tr key={item.key}>
                            
                        </tr>
                    )
                 })}
            </tbody>
        </Table>
    )
}

export default Tables
