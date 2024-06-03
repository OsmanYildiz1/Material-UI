import React from "react";
import { CircularProgress, Stack, LinearProgress } from "@mui/material";
export const LessonProgress = () => {
  return (
    <Stack spacing={4}>
      {/* progressi yükleme ifadesi olarak kullanabiliriz. dönme işlemi olmadan dairenin belirli bir kısmını göstermek için variant determinate ve value degerleri vermeliyiz.*/}
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />

      <CircularProgress color="success" variant="determinate" value={25} />
      <CircularProgress color="success" variant="determinate" value={100} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress color="secondary" />
      <LinearProgress color="secondary" variant="determinate" value={50} />
    </Stack>
  );
};
