export function getPageQueryByUrl(url: string) {
    return Number(new URL(url).searchParams.get("page")) || 1;
}