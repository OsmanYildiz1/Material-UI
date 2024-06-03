import { Typography } from "@mui/material";

function LessonTypography() {
  return (
    // yazım mantığı bootstrape benzerdir
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur tenetur tempora harum, incidunt, voluptatum accusamus facere,
        deserunt quam ipsum ipsa laboriosam. Sed, iure amet rerum impedit quidem
        odio odit eum!
      </Typography>

      <Typography variant="body2">
        {/* body 2 daha küçük fonta sahiptir */}
        Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur tenetur tempora harum, incidunt, voluptatum accusamus facere,
        deserunt quam ipsum ipsa laboriosam. Sed, iure amet rerum impedit quidem
        odio odit eum!
      </Typography>

      <Typography variant="h1">H1 GÖRÜNÜMÜ</Typography>
      <Typography variant="h2">H2 GÖRÜNÜMÜ</Typography>
      <Typography variant="h3">H3 GÖRÜNÜMÜ</Typography>
      <Typography variant="h4">H4 GÖRÜNÜMÜ</Typography>
      <Typography variant="h5">H5 GÖRÜNÜMÜ</Typography>
      <Typography variant="h6">H6 GÖRÜNÜMÜ</Typography>

      {/* h1 özellikleri uygulanacak fakat html etiketi h4 olarak görünecek
      variant: uygulanacak özelliği, component html'deki görünümüne etki eder. */}
      <Typography variant="h1" component={"h4"}>
        H1 GÖRÜNÜMÜ
      </Typography>

      <Typography variant="h1" component={"h4"} align="left">
        H1 GÖRÜNÜMÜ
      </Typography>
      <Typography variant="h1" component={"h4"} align="right">
        H1 GÖRÜNÜMÜ
      </Typography>

      <Typography variant="subtitle1">Alt Başlık 1</Typography>
      <Typography variant="subtitle2">Alt Başlık 2</Typography>
    </div>
  );
}

export default LessonTypography;
