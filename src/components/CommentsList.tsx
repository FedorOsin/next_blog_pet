"use client";

import { Box, Typography, Divider } from "@mui/material";
import { useCommentsStore } from "~/store/commentsStore";

interface CommentsListProps {
  postId: string;
}

export const CommentsList = ({ postId }: CommentsListProps) => {
  const { comments } = useCommentsStore();
  const postComments = comments.filter((c) => c.postId === postId);

  return (
    <Box sx={{ mt: 2 }}>
      {postComments.length === 0 && (
        <Typography variant="body2" color="text.secondary">
          No comments yet.
        </Typography>
      )}
      {postComments.map((comment) => (
        <Box key={comment.id} sx={{ mb: 2 }}>
          <Typography variant="subtitle2">{comment.author}</Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(comment.createdAt).toLocaleString()}
          </Typography>
          <Typography variant="body1">{comment.text}</Typography>
          <Divider sx={{ my: 1 }} />
        </Box>
      ))}
    </Box>
  );
};
