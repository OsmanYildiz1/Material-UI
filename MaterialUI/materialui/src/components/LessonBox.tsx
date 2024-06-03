import React from "react";
import Box from "@mui/material/Box";

function LessonBox() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100px",
        height: "100px",
        color: "white",
        padding: "20px",
        "&:hover": { backgroundColor: "error.main" }, // scss gibi & classı temsil eder.
      }}
    >
      LessonBox
    </Box>
  );
}

export default LessonBox;
