import {Box, Container, Grid} from "@mui/material";

export function AvatarCard() {
    return <Box>Avatar Card</Box>;
}

export function FriendList() {
    return <Box>Friend List</Box>;
}

export function ProfileInfo() {
    return <Box>Profile Info</Box>;
}

export function PostCard() {
    return <Box>Post Card</Box>;
}

export function NavBar() {
    return <Box>Navigation Bar</Box>;
}

export default function ProfilePage() {
    return (
        <Container maxWidth="lg">
            <NavBar/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <AvatarCard/>
                    <FriendList/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <ProfileInfo/>
                    <PostCard/>
                </Grid>
            </Grid>
        </Container>
    )
}