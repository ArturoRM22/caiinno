import { publications } from '@/data/publications';
import Publication from '@/components/Publication';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return publications.map((pub) => ({
    slug: pub.slug,
  }));
}

export default async function PublicationPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const paramsData = await params;
  const publication = publications.find((p) => p.slug === paramsData.slug);

  if (!publication) {
    notFound();
  }

  return <Publication {...publication} />;
}