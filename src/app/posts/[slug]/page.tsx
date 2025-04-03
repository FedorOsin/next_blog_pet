import { getPostBySlug } from "~/utils/getPosts";
import { notFound } from "next/navigation";
import { Box, Typography, Divider } from "@mui/material";
import { CommentForm } from "~/components/CommentForm";
import { CommentsList } from "~/components/CommentsList";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { getAllSlugs } = await import("~/utils/getPosts");
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {new Date(post.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {post.content}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>

      <CommentForm postId={post.id} />
      <CommentsList postId={post.id} />
    </Box>
  );
}
