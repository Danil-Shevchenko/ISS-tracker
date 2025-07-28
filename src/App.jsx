import MapView from "./components/MapView";
import MapInfo from "./components/MapInfo";
import ISSCrewList from "./components/ISSCrewList";
import TimeDisplay from "./components/TimeDisplay";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(Date.now());
  const [position, setPosition] = useState({ lat: 53.54992, lng: 10.00678 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.people);
        setLoading(false);
      });
    const fetchData = () => {
      fetch("http://api.open-notify.org/iss-now.json")
        .then((response) => response.json())
        .then((data) =>
          setPosition({
            lat: parseFloat(data.iss_position.latitude),
            lng: parseFloat(data.iss_position.longitude),
          })
        );
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <MapInfo position={position}></MapInfo>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TimeDisplay time={time}></TimeDisplay>
        </Grid>
        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{ width: "100%", minHeight: 300,  }}
        >
          <MapView position={position}></MapView>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ISSCrewList people={people}></ISSCrewList>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
