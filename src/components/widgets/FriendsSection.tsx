import {Avatar, Box, Stack, Typography} from "@mui/material";

const friends = [
    {name: "Alice", avatar: "/alice.jpg"},
    {name: "Bob", avatar: "/bob.jpg"},
    {name: "Charlie", avatar: "/charlie.jpg"},
];

export default function FriendsSection() {
    return (
        <Box sx={{mt: 5}}>
            <Typography variant="h6" gutterBottom>
                Друзья
            </Typography>
            <Stack direction="row" spacing={2}>
                {friends.map((friend, index) => (
                    <Box key={index} textAlign="center">
                        <Avatar src={friend.avatar} sx={{width: 56, height: 56, mx: "auto"}}/>
                        <Typography variant="caption">{friend.name}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}