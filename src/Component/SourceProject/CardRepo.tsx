// CardRepo.jsx

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CardRepo = ({ leen }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>
        <i className="bi bi-git"></i>
        <Typography variant="h5" component="div">
          Repository Title
        </Typography>
      </CardHeader>

      <CardContent>
        <Typography component="p" color="text.secondary">
          Description of the repository.
        </Typography>
        <Box>
          <span>.</span>
          <Typography>{leen}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardRepo;
