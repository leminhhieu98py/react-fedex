import React from 'react'
import img from '../../assets/images/not_found.png'
import Grid from '@mui/material/Grid';


const NotFound = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <img src={img} style={{width: "70%", marginTop: "50px"}} alt="Page not found" />
                </Grid>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <h1 style={{marginTop: "30px"}}>Trang không tìm thấy, vui lòng thử lại sau</h1>
                </Grid>
            </Grid>
        </>
    )
}

export default NotFound
