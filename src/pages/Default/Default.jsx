import React from 'react'
import img from '../../assets/images/welcome.png'
import Grid from '@mui/material/Grid';


const Default = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <img src={img} style={{ width: "70%", marginTop: "80px" }} alt="Welcome back!" />
            </Grid>
        </Grid>
    )
}

export default Default
