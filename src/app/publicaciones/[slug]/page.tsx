// src/app/publicaciones/[slug]/page.tsx
import { publications } from '@/data/publications';
import { notFound } from 'next/navigation';
import PublicationPageContent from './PublicationPageContent';

type Props = {
  params: {
    slug: string;
  };
};

export default function PublicationPage({ params }: Props) {
  // No need to await params as it's already available
  const publication = publications.find((p) => p.slug === params.slug);

  if (!publication) {
    notFound();
  }

  return <PublicationPageContent publication={publication} />;
}