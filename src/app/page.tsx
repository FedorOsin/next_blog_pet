import { getAllPosts } from "~/utils/getPosts";
import { PostCard } from "~/components/PostCard";
import { Box } from "@mui/material";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Box>
    </Box>
  );
}
