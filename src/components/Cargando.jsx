import { Box, CircularProgress, Grid, Typography } from "@mui/material";


export default function Cargando() {
    return (
        <Grid container alignItems="center" justifyContent="center" height="60vh">
            <Box display='flex' flexDirection="column" alignItems="center" mt="auto" mb="auto">
                <CircularProgress />
                <Typography variant="h5">Cargando</Typography>
            </Box>
        </Grid>
    )
}