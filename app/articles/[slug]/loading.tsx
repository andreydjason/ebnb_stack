// app/articles/[slug]/loading.tsx
 
//import { Suspense } from 'react';
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ArticleLoading() {
  return (
    <>
        <LoadingSpinner />
    </>
  );
};