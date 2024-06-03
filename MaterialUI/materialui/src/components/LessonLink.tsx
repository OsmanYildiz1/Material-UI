import React from "react";
import { Link, Box } from "@mui/material";

function LessonLink() {
  return (
    <Box>
      <Link href="https://www.canboz.com/">Websiteme git</Link>
      <Link href="https://www.canboz.com/" color={"error"}>
        Websiteme git
      </Link>

      {/*underline altındaki çizgi özelliklerini kontrol eder. default özelliği always  */}
      <Link
        href="https://www.canboz.com/"
        variant="body2"
        color="secondary"
        underline="none"
      >
        Websiteme git
      </Link>
      <Link
        href="https://www.canboz.com/"
        variant="body2"
        color="secondary"
        underline={"hover"}
      >
        Websiteme git
      </Link>
      <Link
        href="https://www.canboz.com/"
        variant="body2"
        color="secondary"
        underline="always"
      >
        Websiteme git
      </Link>

      <Link href="https://www.canboz.com/" onClick={() => console.log("Osman")}>
        Websiteme git
      </Link>
    </Box>
  );
}

export default LessonLink;
