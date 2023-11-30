const IS_SERVER = typeof window === 'undefined';

export default function getURL(path) {
    const baseURL = IS_SERVER
        ? process.env.NEXT_PUBLIC_SITE_URL
        : window.location.origin;
    console.log(baseURL, path);
    return baseURL + path;
}
