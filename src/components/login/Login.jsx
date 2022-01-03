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
import "./login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [usernameValid, setUsernameValid] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
        if (username.trim().length === 0) setUsernameValid(false);

        if (password.trim().length === 0) setPasswordValid(false);

        if (usernameValid && passwordValid) {
            if (username === "admin" && password === "123") {
                localStorage.setItem("isLoggedIn", true);
                props.handleLogin();
            }
        }
    };

    const handleChangeUsername = (e) => {
        const usernameInput = e.target.value;
        setUsername(usernameInput);
        if (usernameInput.trim().length === 0) setUsernameValid(false);
        else setUsernameValid(true);
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
        <div className='loginDiv'>
            <div className='loginForm'>
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
                    <InputLabel
                        htmlFor='outlined-adornment-password'
                        error={passwordValid === false ? true : false}
                    >
                        Mật khẩu
                    </InputLabel>
                    <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handleChangePassword}
                        error={passwordValid === false ? true : false}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                >
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
                        Đăng nhập
                    </Button>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link className='forget-pasword-link' to='/forgetpassword'>
                        Quên mật khẩu
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
