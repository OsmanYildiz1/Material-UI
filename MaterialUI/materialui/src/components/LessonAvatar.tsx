import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";

export const LessonAvatar = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: 10 }}
          src="https://randomuser.me/api/portraits/women/56.jpg"
        />
        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
      </AvatarGroup>

      {/* variant ile çerçevenin görüntüsünü değiştiririz. max ile maksimum görünecek avatarı belirleyebiliriz. */}
      <AvatarGroup max={4}>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Can
        </Avatar>
        <Avatar
          variant={"square"}
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Tuba
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Can
        </Avatar>
        <Avatar
          variant={"square"}
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Tuba
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Can
        </Avatar>
        <Avatar
          variant={"square"}
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          Tuba
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};
