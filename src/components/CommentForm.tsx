"use client";

import { Box, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useCommentsStore } from "~/store/commentsStore";
import { v4 as uuidv4 } from "uuid";

interface CommentFormProps {
  postId: string;
}

interface FormValues {
  author: string;
  text: string;
}

export const CommentForm = ({ postId }: CommentFormProps) => {
  const { addComment } = useCommentsStore();
  const { control, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const newComment = {
      id: uuidv4(),
      postId,
      author: data.author,
      text: data.text,
      createdAt: new Date().toISOString(),
    };
    addComment(newComment);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Controller
        name="author"
        control={control}
        defaultValue=""
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField {...field} label="Your name" fullWidth sx={{ mb: 2 }} />
        )}
      />
      <Controller
        name="text"
        control={control}
        defaultValue=""
        rules={{ required: "Comment is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Your comment"
            fullWidth
            multiline
            rows={3}
            sx={{ mb: 2 }}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Add Comment
      </Button>
    </Box>
  );
};
