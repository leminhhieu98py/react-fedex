import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import callApi from "../../utils/apiCaller";
import { DeclarationDetail } from "./DeclarationDetail";
import Default from "./Default";
import HeaderTitle from "./../../components/UI/HeaderTitle/HeaderTitle";

const DeclarationInfo = () => {
    const [defautPageStatus, setDefaultPageStatus] = useState(true);
    const [companyRef, setCompanyRef] = useState("");
    const [declarationRef, setDeclarationRef] = useState("");
    const emptyData = {
        generalInfomation: {
            aa: "",
            bb: "",
            cc: "",
            dd: "",
            ee: "",
            ff: "",
            gg: "",
            hh: "",
            ii: "",
            jj: "",
            kk: "",
        },
        items: [],
        id: "",
    };
    const [data, setData] = useState(emptyData);

    const inputValidation = () => {
        if (Boolean(companyRef && declarationRef)) return true;

        return false;
    };

    const handleSearch = () => {
        if (inputValidation()) {
            setDefaultPageStatus(false);

            let url = "declaration/" + declarationRef;
            callApi(url).then((res) => {
                let data_api = res?.data ?? emptyData;
                // console.log(data_api)
                setData(data_api);
            });
        }
    };

    return (
        <>
            {/* <div className='content__wrapper'> */}
            {/* Filters and input */}
            <Grid container spacing={3}>
                <HeaderTitle>Tra cứu tờ khai</HeaderTitle>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                        onChange={(event) => {
                            setCompanyRef(event.target.value);
                        }}
                        fullWidth={true}
                        value={companyRef}
                        type='text'
                        label='Mã doanh nghiệp'
                        variant='standard'
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <TextField
                        onChange={(event) => {
                            setDeclarationRef(event.target.value);
                        }}
                        fullWidth={true}
                        value={declarationRef}
                        type='text'
                        label='Số tờ khai'
                        variant='standard'
                        required
                    />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={12}
                    md={6}
                    lg={3}
                    xl={3}
                    direction='row'
                    alignItems='flex-end'
                >
                    <Button
                        onClick={handleSearch}
                        style={{ borderRadius: "10px" }}
                        id='searchBtn'
                        variant='outlined'
                        startIcon={<SearchIcon />}
                    >
                        Tìm kiếm
                    </Button>
                </Grid>
            </Grid>

            {/* Seach Content */}
            {defautPageStatus ? <Default /> : <DeclarationDetail data={data} />}
            {/* </div> */}
        </>
    );
};

export default DeclarationInfo;
