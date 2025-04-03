import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Comment {
  id: string;
  postId: string;
  author: string;
  text: string;
  createdAt: string;
}

interface CommentsState {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  setComments: (comments: Comment[]) => void;
}

export const useCommentsStore = create<CommentsState>()(
  persist(
    (set) => ({
      comments: [],
      addComment: (comment) =>
        set((state) => ({
          comments: [comment, ...state.comments],
        })),
      setComments: (comments) => set({ comments }),
    }),
    {
      name: "comments-storage",
    }
  )
);
