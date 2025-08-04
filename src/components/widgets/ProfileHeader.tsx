import {Avatar, Box, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export default function ProfileHeader() {
    const data = useSelector((state: RootState) => state.profile);
    return (
        <Stack direction="row" spacing={3} alignItems="center">
            <Avatar src="/user.jpg" sx={{width: 100, height: 100}}/>
            <Box>
                <Typography variant="h5">{data ? data.username: 'Null'}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Your status
                </Typography>
            </Box>
        </Stack>
    )
}