"use client";

import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: 4, py: 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              .my_blog
            </Typography>
          </Link>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          {session && (
            <Typography variant="body1" sx={{ ml: 1 }}>
              {session.user?.name}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {session ? (
            <Button color="inherit" onClick={() => signOut()}>
              Выйти
            </Button>
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
