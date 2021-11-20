import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import TableRows from './TableRows';

export const DeclarationDetail = (props) => {
    let { data } = props
    let generalInfo = data.generalInfomation;
    let {aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk, ...rest} = generalInfo
    return (
        <div style={{marginTop: "100px"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Chi cục hải quản giám sát: </div>{ aa }
                </Grid>
                <Grid item xs={12} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Đơn vị XNK: </div>{ bb }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Mã số thuế: </div>{ cc }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Ngày tờ khai: </div>{ ff } - { gg }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Số tờ khai: </div>{ dd }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Loại hình: </div>{ hh }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Trạng thái tờ khai: </div>{ ee }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Luồng: </div>{ ii }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Số quản lý hàng hóa: </div>{ jj }
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{display: "flex"}}>
                    <div style={{fontWeight: "700", width: "250px"}}>Kết xuất dữ liệu: </div>{ kk }
                </Grid>
            </Grid>

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
                                {/* {renderRows(data)} */}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
