import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Default from '../NotFound/Default';
import { DeclarationDetail } from './DeclarationDetail';

const DeclarationInfo = () => {
    const [defautPageStatus, setDefaultPageStatus] = useState(true)
    const [data, setData] = useState([]);

    const handleSearch = () => {
        setDefaultPageStatus(false)

        // use axios to call api here, example data is here
        let data_api = {
            generalInfomation: {
                aa: "CC HQ Chuyển phát nhanh - 02DSEA0: KHO FEDEX - 1",
                bb: "CÔNG TY TNHH KỸ THUẬT QUỐC TẾ VIỆT NHẬT",
                cc: "0312945656",
                dd: "104339917920",
                ee: "Thông quan",
                ff: "08/11/2021",
                gg: "05/11/2021",
                hh: "Nhập kinh doanh tiêu dùng",
                ii: "Vàng",
                jj: "775050081749",
                kk: "11/11/2021 11:47 AM"
            },
            items: [
                {
                    numberOfPackage: '4 packages',
                    packageWeight: '3 Kilogram',
                    actualPackage: '2 packages'
                },
                {
                    numberOfPackage: '3 packages',
                    packageWeight: '5 Kilogram',
                }
            ]
        }
        setData(data_api)
    }

    return (
        <div className="content__wrapper">

            {/* Filters and input */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField fullWidth={true} id="companyRef" type="text" label="Mã doanh nghiệp" variant="standard" required/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField fullWidth={true} id="declarationRef" type="text" label="Số tờ khai" variant="standard" required/>
                </Grid>
                <Grid item container xs={12} sm={12} md={6} lg={3} xl={3} direction="row" alignItems="flex-end">
                    <Button onClick={handleSearch} style={{borderRadius:"10px"}} id="searchBtn" variant="outlined" startIcon={<SearchIcon />}>Tìm kiếm</Button>
                </Grid>
            </Grid>

            {/* Seach Content */}
            {defautPageStatus ? <Default /> : <DeclarationDetail data={data} />}
        </div>
    )
}

export default DeclarationInfo
