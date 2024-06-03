import React from "react";
import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const LessonBadge = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {/* badgecontent ile icon üzerindeki yazıyı yazarız. stack içindeyse direction row olmalı. Max girdiğimiz sayıdan fazla content varsa "max"+ şeklinde olur.
      Anchororigin özelliği ile dikey ve yatayda konumlandırma yapabiliriz. */}
      <Badge badgeContent={50} color={"secondary"}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={50} max={40} color={"secondary"}>
        <MailIcon />
      </Badge>
      <Badge
        badgeContent={50}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        color={"secondary"}
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
};
