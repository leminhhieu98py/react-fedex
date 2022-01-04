import React from "react";
import Grid from "@mui/material/Grid";
import avatar from "../../assets/images/feDex_avatar.png";
import { Button, TextField } from "@mui/material";
import HeaderTitle from "./../../components/UI/HeaderTitle/HeaderTitle";

const Profile = (props) => {
    return (
        <>
            {/* Thông tin tài khoản */}
            <Grid container spacing={3}>
                <HeaderTitle>Thông tin tài khoản</HeaderTitle>
                <Grid item lg={3} md={4} xs={4} style={{ textAlign: "center" }}>
                    <img
                        src={avatar}
                        style={{
                            width: "80%",
                            borderRadius: "50%",
                            border: "2px solid #0000008a",
                        }}
                        alt='avatar'
                    />
                </Grid>
                <Grid item container spacing={3} lg={9} md={8} xs={8}>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Họ và tên'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Số điện thoại'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Email liên hệ'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Địa chỉ liên hệ'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Mã số thuế'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Mã số thuế'
                            variant='standard'
                            required
                        />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        style={{ textAlign: "center" }}
                    >
                        <TextField
                            fullWidth={true}
                            type='text'
                            label='Mã số thuế'
                            variant='standard'
                            required
                        />
                    </Grid>
                </Grid>
                <Grid item lg={3} md={4} xs={4}></Grid>
                <Grid item lg={3} md={4} xs={4}>
                    <Button
                        style={{ borderRadius: "10px",  marginTop: "10px" }}
                        id='updateBtn'
                        variant='outlined'
                    >
                        Cập nhật thông tin
                    </Button>
                </Grid>
            </Grid>

            {/* Cập nhật mật khẩu */}
            <Grid container spacing={3} style={{marginTop: "80px"}}>
                <HeaderTitle>Đặt lại mật khẩu</HeaderTitle>
                <Grid item lg={3} md={6} xs={12}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Mật khẩu cũ'
                        variant='standard'
                    />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Mật khẩu mới'
                        variant='standard'
                    />
                </Grid>
                <Grid item lg={3} md={6} xs={12}>
                    <TextField
                        fullWidth
                        type='text'
                        label='Xác nhận mật khẩu mới'
                        variant='standard'
                    />
                </Grid>
                <Grid item lg={3} md={6} xs={12} style={{textAlign: "right"}}>
                    <Button
                        style={{ borderRadius: "10px", marginTop: "10px" }}
                        id='updatePasswordBtn'
                        variant='outlined'
                    >
                        Thay đổi mật khẩu
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;
