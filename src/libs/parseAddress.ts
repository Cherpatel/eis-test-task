export function parseAddress(address: string) {
    const parts = address.split(",").slice(1);

    const [street, house, apartments] = parts.map(part => part
        .trim()
        .split(" "))
        .flat()
        .filter((_, i) => i % 2);

    return `ул. ${ street }, д. ${ house }, кв. ${ apartments }`;
}