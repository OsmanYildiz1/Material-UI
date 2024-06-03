import React from "react";
import { Stack, Divider } from "@mui/material";

function LessonStack() {
  return (
    // stack display flex ve direction column özelliğine sahiptir.
    // divider, bir ara çizgi bölücü sayılabilir. dikey ve flexItem olarak tanımlanmalıdır.
    // responsive tasarım için xs: mobil, md: 800px üzeri...vs
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
}

export default LessonStack;
