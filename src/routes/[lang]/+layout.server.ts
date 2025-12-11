import { getSiteContent } from '$lib/utils/markdown';

export const load = ({ params }) => {
    const lang = params.lang as 'en' | 'jp'; // Verified by params/lang.ts
    const siteContent = getSiteContent(lang);
    return {
        siteContent,
        lang
    };
};
