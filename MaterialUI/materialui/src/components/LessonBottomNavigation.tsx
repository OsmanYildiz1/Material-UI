import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const LessonBottomNavigation = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    // labelların gözükmesi için BottomNavigation'a showlabel eklenmeli. value değeri 0'sa en baştaki eleman yanacak
    <BottomNavigation
      showLabels
      value={value}
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label={"Öncekiler"} />
      <BottomNavigationAction icon={<FavoriteIcon />} label={"Seviklerim"} />
      <BottomNavigationAction icon={<LocationOnIcon />} label={"Konumum"} />
    </BottomNavigation>
  );
};
