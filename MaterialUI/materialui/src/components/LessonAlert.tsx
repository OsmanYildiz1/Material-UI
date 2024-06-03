import React from "react";
import { Alert, Stack, AlertTitle } from "@mui/material";

export const LessonAlert = () => {
  // severity alert tipini belirtir.
  return (
    <Stack spacing={4}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Lesson Alert
      </Alert>

      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Lesson Alert
      </Alert>

      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>Lesson Alert
      </Alert>

      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>Lesson Alert
      </Alert>
    </Stack>
  );
};
