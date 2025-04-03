"use client";

import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">My Blog</Typography>
        <Box>
          {session ? (
            <>
              <Typography variant="body2" sx={{ mr: 2, display: "inline" }}>
                {session.user?.name}
              </Typography>
              <Button color="inherit" onClick={() => signOut()}>
                Выйти
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => signIn()}>
              Войти
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
