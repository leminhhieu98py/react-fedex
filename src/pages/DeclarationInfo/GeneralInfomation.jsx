import { Grid } from '@mui/material'
import React from 'react'

const GeneralInfomation = (data) => {
    let {aa, bb, cc, dd, ee, ff, gg, hh, ii, jj, kk} = data.data
    
    return (
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
    )
}

export default GeneralInfomation
