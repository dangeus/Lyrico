import {Avatar, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material"
import React from "react"
import {useAvatarMenu} from "../../hooks/useAvatarMenu"
import {AccountCircle, Logout} from "@mui/icons-material"

export default function AvatarIcon() {
    const {
        anchorEl,
        open,
        handleClick,
        handleClose,
        handleProfile,
        handleLogout,
    } = useAvatarMenu()

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleProfile}>
                    <AccountCircle>
                        <Logout fontSize="small"/>
                    </AccountCircle>
                    Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}