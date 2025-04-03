"use client";

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Article } from "~/types";

interface PostCardProps {
  post: Article;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        flex: "1 1 30%",
        m: 1,
        boxShadow: 3,
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" },
      }}
    >
      <Link
        href={`/posts/${post.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <Box
            component="img"
            src="/images/post-preview.png"
            alt={post.title}
            sx={{ width: "100%", height: 160, objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              Front-end • 1 месяц назад
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {post.description}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              3 минуты
              <Box component="span">Читать →</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
