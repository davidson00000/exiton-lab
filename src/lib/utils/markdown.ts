import matter from 'gray-matter';
import { marked } from 'marked';
import { enTranslations } from '$lib/data/en_translations';
import rawContent from '$lib/content/exiton_lab_site_content.md?raw';

export interface Section {
  id: string;
  title: string;
  content: string;
  raw: string;
}

export interface SiteContent {
  metadata: {
    title: string;
    tagline: string;
  };
  intro: {
    title: string;
    content: string;
  };
  sections: Section[];
}

function parseMarkdown(content: string): any {
  // Split content by H2 headers (## Title)
  const parts = content.split(/^##\s/gm);
  const introRaw = parts[0];
  const introHtml = marked.parse(introRaw.replace(/^#\s.*$/m, '')); // Remove H1

  const sections = parts.slice(1).map((part) => {
    const endOfTitle = part.indexOf('\n');
    const title = part.substring(0, endOfTitle).trim();
    const body = part.substring(endOfTitle + 1);

    // Determine ID based on Title Mapping (based on JP original file structure)
    let id = title.toLowerCase().split(' ')[0]; // default
    if (title.includes("What is") || title.includes("とは")) id = "about";
    if (title.includes("Research Focus") || title.includes("研究テーマ")) id = "research";
    if (title.includes("Research Principles") || title.includes("ポリシー")) id = "principles";
    if (title.includes("Current Projects")) id = "projects";
    if (title.includes("People")) id = "people";
    if (title.includes("Technology Stack") || title.includes("技術スタック")) id = "tech";
    if (title.includes("Blog") || title.includes("ブログ")) id = "notes";
    if (title.includes("Contact") || title.includes("コンタクト")) id = "contact";
    if (title.includes("Roadmap")) id = "roadmap";

    return {
      id,
      title,
      content: marked.parse(body) as string,
      raw: body
    };
  });

  return { introHtml, sections };
}

export function getSiteContent(lang: 'en' | 'jp' = 'jp'): SiteContent {
  // 1. Always parse the Source (JP) first to get structure
  // We use the imported rawContent string directly
  const { data, content } = matter(rawContent);
  const parsedJP = parseMarkdown(content);

  // 2. If Lang is JP, return parsed source
  if (lang === 'jp') {
    return {
      metadata: {
        title: data.title || 'EXITON Lab',
        tagline: data.tagline || 'Architecture-Driven Intelligence'
      },
      intro: {
        title: data.title || "EXITON Lab",
        content: parsedJP.introHtml as string
      },
      sections: parsedJP.sections
    };
  }

  // 3. If Lang is EN, map to enTranslations
  // We use the ID to lookup the translation
  const sectionsEN = parsedJP.sections.map((sec: any) => {
    // @ts-ignore
    const trans = enTranslations.sections[sec.id];
    if (trans) {
      return {
        id: sec.id,
        title: trans.title,
        content: trans.content, // HTML string from data
        raw: ''
      };
    }
    return sec; // Fallback to JP if no translation
  });

  return {
    metadata: {
      title: data.title,
      tagline: enTranslations.tagline
    },
    intro: {
      title: enTranslations.intro.title,
      content: enTranslations.intro.content
    },
    sections: sectionsEN
  };
}
