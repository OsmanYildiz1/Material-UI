import "./App.css";
import LessonAccordion from "./components/LessonAccordion";
import { LessonAlert } from "./components/LessonAlert";
import LessonAppBar from "./components/LessonAppBar";
import { LessonAutoComplete } from "./components/LessonAutoComplete";
import { LessonAvatar } from "./components/LessonAvatar";
import { LessonBadge } from "./components/LessonBadge";
import { LessonBottomNavigation } from "./components/LessonBottomNavigation";
import LessonBox from "./components/LessonBox";
import LessonBreadCrumbs from "./components/LessonBreadCrumbs";
import LessonButton from "./components/LessonButton";
import LessonButtonGroup from "./components/LessonButtonGroup";
import LessonCard from "./components/LessonCard";
import { LessonCheckbox } from "./components/LessonCheckbox";
import { LessonCustomization } from "./components/LessonCustomization";
import { LessonDateRange } from "./components/LessonDataRange";
import { LessonDioalog } from "./components/LessonDioalog";
import LessonDrawer from "./components/LessonDrawer";
import LessonGrid from "./components/LessonGrid";
import LessonImageList from "./components/LessonImageList";
import LessonLink from "./components/LessonLink";
import { LessonList } from "./components/LessonList";
import { LessonLoadingButton } from "./components/LessonLoadingButton";
import { LessonMasonry } from "./components/LessonMasonry";
import LessonPaper from "./components/LessonPaper";
import { LessonProgress } from "./components/LessonProgress";
import { LessonRadioExample } from "./components/LessonRadioExample";
import LessonRadioGroup from "./components/LessonRadioGroup";
import { LessonSelect } from "./components/LessonSelect";
import { LessonSkeleton } from "./components/LessonSkeleton";
import { LessonSnackbar } from "./components/LessonSnackbar";
import { LessonSpeedDial } from "./components/LessonSpeedDial";
import LessonStack from "./components/LessonStack";
import { LessonTable } from "./components/LessonTable";
import { LessonTabs } from "./components/LessonTabs";
import LessonTextField from "./components/LessonTextField";
import { LessonTimeline } from "./components/LessonTimeline";
import { LessonTooltip } from "./components/LessonTooltip";
import LessonTypography from "./components/LessonTypography";

import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <LessonTypography /> */}
          {/* <LessonButton /> */}
          {/* <LessonButtonGroup /> */}
          {/* <LessonTextField /> */}
          {/* <LessonRadioGroup /> */}
          {/* <LessonRadioExample /> */}
          {/* <LessonSelect /> */}
          {/* <LessonCheckbox /> */}
          {/* <LessonAutoComplete /> */}
          {/* <LessonBox /> */}
          {/* <LessonStack /> */}
          {/* <LessonGrid /> */}
          {/* <LessonCard /> */}
          {/* <LessonAccordion /> */}
          {/* <LessonAppBar /> */}
          {/* <LessonImageList /> */}
          {/* <LessonPaper /> */}
          {/* <LessonLink /> */}
          {/* <LessonBreadCrumbs /> */}
          {/* <LessonDrawer /> */}
          {/* <LessonBadge /> */}
          {/* <LessonSpeedDial /> */}
          {/* <LessonBottomNavigation /> */}
          {/* <LessonAvatar /> */}
          {/* <LessonList /> */}
          {/* <LessonTooltip /> */}
          {/* <LessonAlert /> */}
          {/* <LessonDioalog /> */}
          {/* <LessonSnackbar /> */}
          {/* <LessonProgress /> */}
          {/* <LessonSkeleton /> */}
          {/* <LessonLoadingButton /> */}
          {/* <LessonTable /> */}
          {/* <LessonDateRange /> */}
          {/* <LessonTabs /> */}
          {/* <LessonMasonry /> */}
          {/* <LessonTimeline /> */}
          <LessonCustomization />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
