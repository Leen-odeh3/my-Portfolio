import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home , Projects } from "../utils/Path";
import { Box } from "@mui/material";


const index = () => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default index;
