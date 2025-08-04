import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const favoriteTracks = [
    {title: "Lost in the Echo", artist: "Linkin Park", image: "/track1.jpg"},
    {title: "Blinding Lights", artist: "The Weeknd", image: "/track2.jpg"},
    {title: "Get Lucky", artist: "Daft Punk", image: "/track3.jpg"},
];

export default function FavoriteTracksSection() {
    return (
        <Box sx={{mt: 5}}>
            <Typography variant="h6" gutterBottom>
                <FavoriteIcon sx={{mr: 1}}/> Избранные треки
            </Typography>
            <Grid container spacing={2}>
                {favoriteTracks.map((track, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={track.image}
                                alt={track.title}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">{track.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {track.artist}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}