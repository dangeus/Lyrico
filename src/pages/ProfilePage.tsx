import {Box, Container} from "@mui/material";
import ProfileHeader from "../components/widgets/ProfileHeader";
import FavoriteTracksSection from "../components/widgets/FavoriteTracksSection";
import FriendsSection from "../components/widgets/FriendsSection";
import {useAuthCheck} from "../hooks/useAuthCheck";
import {useLoadProfile} from "../hooks/useLoadProfile";

export default function ProfilePage() {
    useAuthCheck()
    useLoadProfile()

    return (
        <Container sx={{backgroundColor: 'white'}} maxWidth="lg">
            <Box sx={{p: 8}}>
                <ProfileHeader/>
                <FavoriteTracksSection/>
                <FriendsSection/>
            </Box>
        </Container>
    )
}