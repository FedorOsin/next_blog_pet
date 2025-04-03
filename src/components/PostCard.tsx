"use client";

import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import Link from "next/link";
import { Article } from "~/types";

interface PostCardProps {
  post: Article;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <Link href={`/posts/${post.slug}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
