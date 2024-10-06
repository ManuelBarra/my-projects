export const items = [
    { id: "0", name: "CaixaBank", link: "caichabank.es", favorite: false },
    { id: "1", name: "CaixaBank1", link: "caichabank.es", favorite: false },
    { id: "2", name: "CaixaBank2", link: "caichabank.es", favorite: false },
    { id: "3", name: "CaixaBank3", link: "caichabank.es", favorite: false },
    { id: "4", name: "CaixaBank4", link: "caichabank.es", favorite: false },
    { id: "5", name: "CaixaBank5", link: "caichabank.es", favorite: false },
    { id: "6", name: "CaixaBank6", link: "caichabank.es", favorite: false },

];

export function getProject(id) {
    return items.find((item) => item.id === id)
}
