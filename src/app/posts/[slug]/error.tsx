"use client";

import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" color="error">
        Failed to load post. Please try again later.
      </Typography>
    </Box>
  );
}
