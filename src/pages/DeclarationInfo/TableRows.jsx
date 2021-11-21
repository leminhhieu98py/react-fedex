import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

function createData(order, numberOfPackage, packageWeight, actualPackage, confirmation) {
    return { order, numberOfPackage, packageWeight, actualPackage, confirmation };
}

const TableRows = (data) => {
    const items = data.data.items ?? []
    if(items.length > 0){
        let rows = [];
    
        items.map((item, index) => {
            let {numberOfPackage, packageWeight, actualPackage, confirmation} = item
            return rows.push(createData(index, numberOfPackage, packageWeight, actualPackage, confirmation));
        })

        let result = rows.map((row, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.numberOfPackage}</TableCell>
                    <TableCell>{row.packageWeight}</TableCell>
                    <TableCell>{row.actualPackage}</TableCell>
                    <TableCell>{row.confirmation}</TableCell>
                </TableRow>
            )
        })
        return(
            <TableBody>
                {result}
            </TableBody>
        );
    } else{
        return (
        <TableBody>
            <TableRow>
                <TableCell colSpan="5" style={{textAlign: "center"}}>Không tìm thấy dữ liệu</TableCell>
            </TableRow>
        </TableBody>

        );
    }
}

export default TableRows
