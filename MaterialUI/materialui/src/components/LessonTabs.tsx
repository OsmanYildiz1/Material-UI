import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";

export const LessonTabs = () => {
  return (
    // Tabs özelliği joy paketi kurularak kullanılır. default value baslangıc indeksini gösterir. Tab Panel ile de value değerleri atanarak hangi taba ait oldugu belirtilmis olur.
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanel value={0}>First</TabPanel>
      <TabPanel value={1}>Second</TabPanel>
      <TabPanel value={2}>Third</TabPanel>
    </Tabs>
  );
};
