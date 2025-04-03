"use client";

import React from "react";
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useCommentsStore } from "~/store/commentsStore";
import { v4 as uuidv4 } from "uuid";
import CloseIcon from "@mui/icons-material/Close";

interface CommentFormProps {
  postId: string;
}

interface FormValues {
  author: string;
  text: string;
}

export const CommentForm = ({ postId }: CommentFormProps) => {
  const { addComment } = useCommentsStore();
  const { control, handleSubmit, reset, watch } = useForm<FormValues>();

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
    <Box sx={{ mt: 2 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", gap: 2, flexDirection: "column" }}
      >
        <Controller
          name="author"
          control={control}
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Ваше имя"
              fullWidth
              variant="outlined"
            />
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
              label="Ваш комментарий"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-end" }}
        >
          Отправить
        </Button>
      </Box>

      {watch("text") && watch("author") && (
        <Paper elevation={3} sx={{ p: 2, mt: 3, position: "relative" }}>
          <Typography variant="subtitle2">{watch("author")}</Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date().toLocaleString()}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {watch("text")}
          </Typography>

          <IconButton
            size="small"
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => reset()}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Paper>
      )}
    </Box>
  );
};
