import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function MapInfo({ position }) {
  return (
    <Box sx={{ border: "1px solid #ccc", padding: "5px" }}>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        ISS is now located at:
      </Typography>
      <Typography variant="body2">
        Longitude: {position.lng} Latitude: {position.lat}
      </Typography>
    </Box>
  );
}

export default MapInfo;
