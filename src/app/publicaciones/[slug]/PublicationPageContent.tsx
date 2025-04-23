// src/app/publicaciones/[slug]/PublicationPageContent.tsx
import Publication from '@/components/Publication';
import { Publication as PublicationType } from '@/models/Publication'; // solo si tienes tipos separados

type Props = {
  publication: PublicationType;
};

export default function PublicationPageContent({ publication }: Props) {
  return <Publication {...publication} />;
}
