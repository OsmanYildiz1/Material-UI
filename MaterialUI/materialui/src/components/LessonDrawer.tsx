import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function LessonDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      {/* Icona tıkladığımızda Drawer'ın open özelliği true olsun isteriz. onClose ile kapatma fonksiyonu. anchor ile drawer'ın açılacağı yeri belirtiriz.  */}
      <Drawer open={isOpen} anchor="bottom" onClose={() => setIsOpen(false)}>
        <Box width={"250px"} textAlign={"center"}>
          <Typography component={"div"} variant="h6">
            Soldaki Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default LessonDrawer;
