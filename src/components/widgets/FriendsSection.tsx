import {Avatar, Box, Stack, Typography} from "@mui/material"
import {useSelector} from "react-redux"
import {RootState} from "../../store/store"

export default function FriendsSection() {
    const data = useSelector((state: RootState) => state.profile.data)
    const friends = data?.friends

    return (
        <Box sx={{mt: 5}}>
            <Typography variant="h6" gutterBottom>
                Друзья
            </Typography>

            {!friends || friends.length === 0 ? (
                <Typography color="text.secondary">Нет друзей</Typography>
            ) : (
                <Stack direction="row" spacing={2}>
                    {friends.map((friend, index) => (
                        <Box key={index} textAlign="center">
                            <Avatar
                                src={friend.avatarUrl || "/default-avatar.jpg"}
                                sx={{width: 56, height: 56, mx: "auto"}}
                            />
                            <Typography variant="caption">
                                {friend.username || "Без имени"}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            )}
        </Box>
    )
}
