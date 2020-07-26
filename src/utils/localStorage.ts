export function getStoredItems(listeNavn?: string): string[] {
    const key = listeNavn ? listeNavn + '_checkedItems' : 'checkedItems';
    const items = window.localStorage.getItem(key);
    return items ? JSON.parse(items) : [];
}

export function getStoredListeNavn(): string[] {
    const items = window.localStorage;
    let keys: string[] = [];
    for (let i = 0; i < items.length; i++) {
        if (items.key(i)?.includes('_')) {
            const listeNavn = items.key(i)?.split('_')[0];
            if (listeNavn) {
                keys.push(listeNavn);
            }
        }
    }

    // Return unique values
    return keys.filter((a, b) => keys.indexOf(a) === b);
}

export function storeItems(checkedItems: string[]) {
    window.localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
}
