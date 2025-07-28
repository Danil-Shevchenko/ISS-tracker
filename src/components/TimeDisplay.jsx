import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function TimeDisplay({ time }) {
  return (
    <Box sx={{ border: "1px solid #ccc", padding: "5px" }}>
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        Current UTC time: {new Date(time).toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "numeric",
        })}
      </Typography>
      <Typography variant="body2">
        {new Date(time).toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
    </Box>
  );
}

export default TimeDisplay;
