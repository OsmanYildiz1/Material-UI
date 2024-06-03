import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function LessonCard() {
  return (
    <Card
      sx={{
        width: "350px",
      }}
    >
      <CardMedia
        component={"img"}
        image="https://source.unsplash.com/random"
        height={"150px"}
      />
      <CardContent>
        <Typography variant="h5" component={"div"}>
          Başlığım
        </Typography>
        <Typography variant="body2" component={"p"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          saepe ipsam porro molestias omnis enim sequi quaerat labore, beatae,
          modi iure non eum tenetur expedita magni, aliquid facilis tempora a!
        </Typography>
      </CardContent>

      {/* CardActions'ta buttonlar ve etkileşimli nesneler olur */}
      <CardActions>
        <Button color="error">Temizle</Button>
        <Button>Kaydet</Button>
      </CardActions>
    </Card>
  );
}

export default LessonCard;
