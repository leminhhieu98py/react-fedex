import React from "react";
import Grid from '@mui/material/Grid';
import img from '../../assets/images/searchForData.png'

const Default = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <img src={img} style={{ width: "35%", marginTop: "10%" }} alt='Page not found' />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <h2 style={{ marginTop: "30px" }}>Vui lòng nhập dữ liệu</h2>
            </Grid>
        </Grid>
    );
};

export default Default;
