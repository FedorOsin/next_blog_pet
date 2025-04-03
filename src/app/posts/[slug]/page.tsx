import { getPostBySlug, getAllSlugs } from "~/utils/getPosts";
import { notFound } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { CommentForm } from "~/components/CommentForm";
import { CommentsList } from "~/components/CommentsList";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await Promise.resolve(getPostBySlug(params.slug));

  if (!post) {
    notFound();
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="caption" color="text.secondary">
        Front-end • 1 месяц назад • 3 минуты
      </Typography>

      <Typography variant="h4" sx={{ my: 2 }}>
        {post.title}
      </Typography>

      <Box
        component="img"
        src="/images/post-cover.png"
        alt={post.title}
        sx={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: 2,
          mb: 3,
        }}
      />

      <Typography variant="body1" sx={{ mb: 2 }}>
        {post.content}
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Комментарии
      </Typography>

      <CommentForm postId={post.id} />
      <CommentsList postId={post.id} />
    </Box>
  );
}
