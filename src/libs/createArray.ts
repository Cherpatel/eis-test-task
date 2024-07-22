export function createArray<T>(n: number, value: T): T[] {
    return new Array(n).fill(value);
}