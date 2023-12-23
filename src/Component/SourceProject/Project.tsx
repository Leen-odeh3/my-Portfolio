import { Box, Grid } from "@mui/material";
import Hero from "./Hero";

const Projects = () => {
  return (
    <div>
      <Hero />
      <Box sx={{width:"90%",margin:"auto",marginTop:"60px"}}>
        <Grid container spacing={3} sx={{ marginTop: "15px" }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
          >
            leen
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
          >
            roaa
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
          >
            ali
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px" }}
          >
            ahmad
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
