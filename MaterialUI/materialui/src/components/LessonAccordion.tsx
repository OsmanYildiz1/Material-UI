import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormLabelBaseProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function LessonAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(isExpanded);
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {/* BASIC USAGE */}
      {/* AccordionSummary tıklamadan önceki görünen kısım  */}
      {/* AccordionDetails, tıklanınca açılan kısım */}
      {/* <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          dolorum voluptas ratione, voluptate corporis sunt vitae eligendi
          pariatur consequatur minus nostrum rem odio soluta incidunt facilis
          nobis natus quo temporibus.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          dolorum voluptas ratione, voluptate corporis sunt vitae eligendi
          pariatur consequatur minus nostrum rem odio soluta incidunt facilis
          nobis natus quo temporibus.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
      </Accordion> */}

      <Accordion
        //  expanded, accordion açma property'si
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          dolorum voluptas ratione, voluptate corporis sunt vitae eligendi
          pariatur consequatur minus nostrum rem odio soluta incidunt facilis
          nobis natus quo temporibus.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          dolorum voluptas ratione, voluptate corporis sunt vitae eligendi
          pariatur consequatur minus nostrum rem odio soluta incidunt facilis
          nobis natus quo temporibus.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          dolorum voluptas ratione, voluptate corporis sunt vitae eligendi
          pariatur consequatur minus nostrum rem odio soluta incidunt facilis
          nobis natus quo temporibus.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default LessonAccordion;
