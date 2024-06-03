import React from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const LessonLoadingButton = () => {
  return (
    <Stack direction={"row"}>
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton loading variant="outlined">
        Kaydet
      </LoadingButton>
    </Stack>
  );
};
