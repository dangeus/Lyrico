import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material"
import {useSelector} from "react-redux"
import {RootState} from "../../store/store"

export default function FavouriteTracksSection() {
    const data = useSelector((state: RootState) => state.profile.data)
    const tracks = data?.favouriteTracks

    return (
        <Box sx={{mt: 5}}>
            <Typography variant="h6" gutterBottom>
                Избранные треки
            </Typography>
            {!tracks || tracks.length === 0 ? (
                <Typography color="text.secondary">
                    Нет данных
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {tracks.map((track, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={track.image || "/default-track.jpg"}
                                    alt={track.title || "Track"}
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
            )}
        </Box>
    )
}
