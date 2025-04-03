import { create } from "zustand";

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

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],
  addComment: (comment) =>
    set((state) => ({
      comments: [comment, ...state.comments],
    })),
  setComments: (comments) => set({ comments }),
}));
