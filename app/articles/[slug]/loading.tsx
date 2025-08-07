// app/articles/[slug]/loading.tsx
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function ArticleLoading() {
  return (
    <>
      <LoadingSpinner />
    </>
  );
};