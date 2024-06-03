import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

function LessonRadioGroup() {
  const [value, setValue] = useState("");
  console.log(value);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };
  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        row
        name="expected-salary"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel
          label="2000$"
          value={"2000"}
          control={<Radio color="error" />}
          color="secondary"
        />
        <FormControlLabel
          label="3000$"
          value={"3000"}
          control={<Radio color="error" />}
          color="secondary"
        />
        <FormControlLabel
          label="4000$"
          value={"4000"}
          control={<Radio color="error" />}
          color="secondary"
        />
        {/*label gösterilen kısımdır. value arka tarafta tuttuğumuz değer control Form tipi(radio, checkbox vs.) */}
      </RadioGroup>
      <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  );
}

export default LessonRadioGroup;
