import React from "react";
import { Skeleton, Stack, Box } from "@mui/material";
import { useState } from "react";

export const LessonSkeleton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      {/* image siületi gibi yüklenene kadar yer kaplar. */}
      {loading ? (
        <Skeleton width={250} height={145} animation="wave" />
      ) : (
        <img
          src="https://source.unsplash.com/random/256*144"
          alt="skeleton"
          width={250}
          height={145}
        />
      )}
    </Box>
  );
};
