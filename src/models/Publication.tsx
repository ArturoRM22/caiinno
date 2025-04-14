type PublicationMedia = {
    type: 'image' | 'video' | 'youtube';
    url: string;
    alt?: string;
}

type DownloadLinks = {
    [key: string]: string;
}

type ContentSection = {
    type: 'paragraph' | 'heading' | 'list' | 'quote';
    content: string | string[];
    downloadKey?: string;
}
  
export type PublicationProps = {
    title: string;
    date: string;
    description: string;
    media?: PublicationMedia[];
    content: ContentSection[];
    downloadLink?: string | DownloadLinks;
    tags?: string[];
    authors?: string[];
}

export type Publication = PublicationProps & {
    id: string;
    slug: string;
}