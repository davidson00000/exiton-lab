import { getSiteContent } from '$lib/utils/markdown';

export const load = () => {
    const siteContent = getSiteContent();
    return {
        siteContent
    };
};
