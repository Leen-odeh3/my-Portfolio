// Projects.jsx

import { Box, Grid } from "@mui/material";
import Hero from "./Hero";
import CardRepo from "./CardRepo";

const Projects = () => {
  return (
    <div>
      <Hero />
      <Box sx={{ width: "90%", margin: "auto", marginTop: "60px" }}>
        <Grid container spacing={3} sx={{ marginTop: "15px" }}>
          {[1, 2, 3, 4].map((item) => (
            <Grid
              key={item}
              item
              xs={12}
              md={4}
              sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
            >
              <CardRepo leen={`Repository ${item}`} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
