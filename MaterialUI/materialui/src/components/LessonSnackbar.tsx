import React, { useState } from "react";
import { Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };
  const action = (
    //Bir değişkene button ve icon atadığımız için Reactfragment etiketi arasına yazdık.
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: "white" }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>Snackbarı Aç</Button>
      {/* action bir işlem için yapılır. otomatik kapanma için onClose'a kapatma fonksiyonu yazmalıyız. anchorOrigin konumlandırma için kullanılır.
       */}
      <Snackbar
        open={openSnackbar}
        message="Hata mesajı aldınız."
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
};
