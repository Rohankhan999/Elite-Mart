export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    // Add other product properties
}

export interface SearchResult {
    results: Product[];
    total: number;
}
