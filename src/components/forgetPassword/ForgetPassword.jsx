import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.css";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [usernameValid, setUsernameValid] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(null);
    const [phone, setPhone] = useState("");
    const [phoneValid, setPhoneValid] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpValid, setOtpValid] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        //validation
        if (username.trim().length === 0) setUsernameValid(false);
        if (password.trim().length === 0) setPasswordValid(false);
        if (phone.trim().length < 10) setPhoneValid(false);
        if (otp.trim().length === 0) setOtpValid(false);


        //alert 
        if (usernameValid && passwordValid && setPhoneValid && setOtpValid) {
            alert("Đặt lại mật khẩu thành công");
        }
    };

    const handleChangeUsername = (e) => {
        const usernameInput = e.target.value;
        setUsername(usernameInput);
        if (usernameInput.trim().length === 0) setUsernameValid(false);
        else setUsernameValid(true);
    };

    const handleChangePhone = (e) => {
        const phoneInput = e.target.value;
        setPhone(phoneInput);
        if (phoneInput.trim().length < 10) setPhoneValid(false);
        else setPhoneValid(true);
    };

    const handleSendOTP = () => {
        if (username.trim().length === 0) {
            setUsernameValid(false);
            return;
        }
        //nếu gửi otp thành công thì mới tắt disable ô mật khẩu mới
        setOtpSent(true);
    };

    const handleChangeOtp = (e) => {
        const otpInput = e.target.value;
        setOtp(otpInput);
        if (otpInput.trim().length === 0) setOtpValid(false);
        else setOtpValid(true);
    };

    const handleChangePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.trim().length === 0) setPasswordValid(false);
        else setPasswordValid(true);
    };

    const handleClickShowPassword = () => {
        setShowPassword((preState) => {
            return !preState;
        });
    };

    return (
        <div className='forgetPasswordDiv'>
            <div className='forget-password-form'>
                <TextField
                    fullWidth
                    label='Tên đăng nhập'
                    value={username}
                    variant='standard'
                    margin='dense'
                    onChange={handleChangeUsername}
                    error={usernameValid === false ? true : false}
                    helperText={
                        usernameValid === false
                            ? "Tên đăng nhập không được để trống"
                            : " "
                    }
                />

                <FormControl fullWidth margin='dense' variant='standard'>
                    <InputLabel error={phoneValid === false ? true : false}>
                        Số điện thoại
                    </InputLabel>
                    <Input
                        value={phone}
                        onChange={handleChangePhone}
                        error={phoneValid === false ? true : false}
                        endAdornment={
                            <InputAdornment position='end'>
                                <Button
                                    disabled={phoneValid ? false : true}
                                    onClick={handleSendOTP}
                                >
                                    Gửi mã otp
                                </Button>
                            </InputAdornment>
                        }
                    />
                    <span
                        className={`helper-text ${
                            phoneValid === false ? "" : "valid"
                        }`}
                    >
                        {phoneValid === false
                            ? "Số điện thoại phải chứa ít nhất 10 chữ số"
                            : "."}
                    </span>
                </FormControl>
                {otpSent ? (
                    <TextField
                        fullWidth
                        label='Nhập mã OTP'
                        value={otp}
                        variant='standard'
                        margin='dense'
                        onChange={handleChangeOtp}
                        error={otpValid === false ? true : false}
                        helperText={
                            otpValid === false
                                ? "Mã OTP không được để trống"
                                : " "
                        }
                    />
                ) : (
                    ""
                )}

                <FormControl fullWidth margin='dense' variant='standard'>
                    <InputLabel error={passwordValid === false ? true : false}>
                        Mật khẩu mới
                    </InputLabel>
                    <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handleChangePassword}
                        error={passwordValid === false ? true : false}
                        disabled={!otpSent}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <span
                        className={`helper-text ${
                            passwordValid === false ? "" : "valid"
                        }`}
                    >
                        {passwordValid === false
                            ? "Mật khẩu không được để trống"
                            : "."}
                    </span>
                </FormControl>
                <div className='center-btn-wrapper'>
                    <Button variant='outlined' onClick={handleSubmit}>
                        Đặt lại mật khẩu
                    </Button>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link className='forget-pasword-link' to='/login'>
                        Quay lại đăng nhập
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
