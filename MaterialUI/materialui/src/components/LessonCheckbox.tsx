import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Box,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

export const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowledge, setKnowledge] = useState<string[]>([]);

  console.log(knowledge);
  const handleKnowledgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowledge.indexOf(event.target.value);
    if (index === -1) {
      setKnowledge([...knowledge, event.target.value]);
    } else {
      setKnowledge(knowledge.filter((item) => item !== event.target.value)); // aynı olanları geriye dönme (tekrar tiklenenleri yani)
    }
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled control={<Checkbox />} label="Lise" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Üniversite"
            />
            <FormControlLabel control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              //  checkbox'ın value özelliğini checked'dan alabilirz. target.value stringtir. checked özelliğiyle boolean ataması yaparız.
              label="Kullanım Koşullarını Kabul Ediyorum."
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Frontendde Neleri biliyorsun</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={knowledge.includes("react")}
                  //   includes geriye true veya false döner
                  onChange={handleKnowledgeChange}
                />
              }
              label="React Js"
              value="react"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Angular"
              value="angular"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Vue Js"
              value="vue"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
