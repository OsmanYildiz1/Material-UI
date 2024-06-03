import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const LessonSelect = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState<string[]>([]); // string array olduğunu belirttik.
  console.log(country);
  return (
    <Box width={"250px"}>
      {/* <TextField
        select
        label="Ülke Seçiniz"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      > */}
      {/**select özelliği verdik. Kapsayıcı divin genişliğini alması için fullWidth kullanılır. */}
      {/* <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField> */}

      {/* Multi seçim, array gönderebiliriz. */}
      <TextField
        SelectProps={{
          multiple: true,
        }}
        select
        label="Ülke Seçiniz"
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        } // split, dizi birleştirmedir. typeof ile tip kontrolü yaptık.
      >
        {/**select özelliği verdik. Kapsayıcı divin genişliğini alması için fullWidth kullanılır. */}
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">France</MenuItem>
      </TextField>
    </Box>
  );
};
