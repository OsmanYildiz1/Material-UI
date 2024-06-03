import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Button,
} from "@mui/material";
import { useState } from "react";

export const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "canboz") {
      setHelperText("Doğru cevap Tabiki Can Boz!");
      setError(false);
    } else if (value === "ofCourseCanBoz") {
      setHelperText("Bravo doğru cevap");
      setError(false);
    } else {
      setHelperText("Lütfen Seçim Yapınız");
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>En Kapsamlı Frontend Eğitimini Veren Eğitmen Kim?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel
            label="Can Boz"
            value={"canboz"}
            control={<Radio />}
          />
          <FormControlLabel
            label="Tabiki Can Boz"
            value={"ofCourseCanBoz"}
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};
