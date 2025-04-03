"use client";

import { Box, Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" color="error">
        Не удалось загрузить пост. Пожалуйста, повторите попытку позже.
      </Typography>
    </Box>
  );
}
