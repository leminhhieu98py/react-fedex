import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import GeneralInfomation from './GeneralInfomation';
import TableRows from './TableRows';

export const DeclarationDetail = (props) => {
    let { data } = props
    let generalInfo = data.generalInfomation;
    return (
        <div style={{marginTop: "100px"}}>

            <GeneralInfomation data={generalInfo} />

            <Grid container style={{marginTop: "30px"}}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                            <TableRow>
                                <TableCell style={{textAlign: "center", width: "50px"}}>Stt</TableCell>
                                <TableCell style={{textAlign: "center"}}>Số lượng hàng (1)</TableCell>
                                <TableCell style={{textAlign: "center"}}>Tổng trọng lượng hàng (2)</TableCell>
                                <TableCell style={{textAlign: "center", width: "230px"}}>Lượng hàng hóa thực tế qua khu vực giám sát hải quan (3)</TableCell>
                                <TableCell style={{textAlign: "center", width: "230px"}}>Xác nhận của công chức hải quan (4)</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableRows data={data} />
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
