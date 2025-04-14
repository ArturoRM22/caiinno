import Publication from '@/components/Publication';
import { publications } from '@/data/publications';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return publications.map((pub) => ({
    slug: pub.slug,
  }));
}

export default function PublicationPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const publication = publications.find((p) => p.slug === slug);

  if (!publication) {
    notFound();
  }

  return <Publication {...publication} />;
} 