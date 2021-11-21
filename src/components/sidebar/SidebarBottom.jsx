import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, IconButton } from '@mui/material';
import avatar from "../../assets/images/feDex_avatar.png"
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'


const SidebarBottom = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));

    return (
        <div className="sidebar__inner-bottom">
            <hr />
            <div className="bottom__content">
                <div className="profile">
                  <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      >
                      <Avatar alt="avatar-image" src={avatar} />
                  </StyledBadge>
                  <Link to="/profile" className="link-to-profile">Fedex Co.operation</Link>
                </div>
                <Link to="/logout"><IconButton style={{marginTop: "2px"}} ><LogoutIcon fontSize="small" /></IconButton></Link>
            </div>
        </div>
    )
}

export default SidebarBottom
