import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';

function ISSCrewList({ people }) {
  const issPeople = people.filter((person) => person.craft === "ISS");
  return (
    <Box sx={{ border: "1px solid #ccc"}}>
      <Box sx={{ padding: 1, gap: 1, display: "flex", flexDirection: "column" }}>
        {people.map((person, index) => {
          if (person.craft == "ISS") {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                 
                  padding: "5px"
                }}
              >
                <Avatar sx={{marginRight: 1}}><PersonIcon/></Avatar>
                <Typography variant="body2">{person.name}</Typography>
              </Box>
            );
          }
        })}
      </Box>

      <Typography
        variant="body2"
        sx={{ borderTop: "1px solid #ccc", padding: "5px" }}
      >
        Total amount: {issPeople.length} people on ISS
      </Typography>
    </Box>
  );
}

export default ISSCrewList;
