import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

function LessonTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Ad" />
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="outlined" />
        <TextField label="Ad" variant="standard" /> {/*Arka planı dolu */}
        <TextField
          label="Ad"
          variant="outlined"
          size="small"
          color="error"
        />{" "}
        {/* color borderını değiştirir. */}
        <TextField
          label="Ad"
          variant="outlined"
          helperText="Lütfen isminizi giriniz."
        />
        {/* helperText, textfieldın altına yardımcı metin ekle */}
        <TextField
          type={"password"}
          label="Ad"
          variant="outlined"
          helperText="Lütfen şifre girin"
        />
        {/* type belirtebiliriz, number, psw vs.*/}
        <TextField
          disabled
          type={"password"}
          label="Ad"
          variant="outlined"
          helperText="disabled"
        />
        {/*disabled, görüntüyü soluk ve içerisine bir şey yazamamayı sağlar. */}
        <TextField
          InputProps={{ readOnly: true }}
          label="Ad"
          variant="outlined"
          helperText="readonly"
        />
        {/*readonly'nin diableddan farkı soluk olmamasıdır. */}
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="Toplam"
          variant="outlined"
        />
        {/** inputAdornment, inputun başına veya sonuna icon veya text eklemeyi sağlar.(position ile konum belirtilir.) */}
        <TextField
          InputProps={{
            endAdornment: <InputAdornment position="end">TL</InputAdornment>,
          }}
          label="Toplam"
          variant="outlined"
        />
      </Stack>

      <Stack direction={"row"}>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={"password"}
          label="Şifre"
          variant="outlined"
          helperText={
            !value
              ? "Lütfen şifrenizi giriniz"
              : "Şifrenizi kimseyle paylaşmayınız."
          }
        />
        {/**onChange ile useState kullanarak text güncellemesi */}
        {/**!value, bir şey yazılmadıysa anlamında */}
      </Stack>
    </Stack>
  );
}

export default LessonTextField;
