export function getEnumAsArray<T>(e: {}): T[] {
    // @ts-ignore
    return [...getEnumStrings(e)].map(a => e[a]);
}

export function getEnumStrings(e: {}): string[] {
    return removeNumbers(Object.keys(e));
}

function removeNumbers(enumKeys: string[]) {
    return enumKeys.filter(key => isNaN(+key));
}
