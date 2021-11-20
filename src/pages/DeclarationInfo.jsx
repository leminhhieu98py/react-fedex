import React from 'react'
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

const DeclarationInfo = () => {
    return (
        <div className="content__wrapper">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField fullWidth={true} id="companyRef" type="text" label="Mã doanh nghiệp" variant="standard" required/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField fullWidth={true} id="declarationRef" type="text" label="Số tờ khai" variant="standard" required/>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeclarationInfo
