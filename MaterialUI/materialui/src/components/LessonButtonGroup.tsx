import React from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";

function LessonButtonGroup() {
  return (
    <Stack direction={"row"}>
      <ButtonGroup variant="contained">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant={"text"}>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" variant={"text"}>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        variant={"text"}
        size="small"
        color="error"
      >
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default LessonButtonGroup;
