import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardRepo() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>
      <i className="bi bi-git"></i>
        <Typography component="h1" />
      </CardHeader>

      <CardContent>
        <Typography component="p" color="text.secondary"></Typography>
      </CardContent>
    </Card>
  );
}
