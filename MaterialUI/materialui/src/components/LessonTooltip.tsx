import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const LessonTooltip = () => {
  return (
    // title özelliği olmadan hata verir. konumlandırma placement özelliği ile
    <Tooltip title="Sil" placement="right">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
