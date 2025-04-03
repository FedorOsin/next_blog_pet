import { getAllPosts } from "~/utils/getPosts";
import { PostCard } from "~/components/PostCard";
import { Box, Typography } from "@mui/material";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Blog
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
}
