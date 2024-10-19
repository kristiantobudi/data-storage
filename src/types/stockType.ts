export type StockType = {
    _id: string;
    item: string;
    quantity_change: number;
    action: string;
    timestamp: string;
    history: [
        {
            action: string;
            quantity: number;
            date: {
                date: string
            }
            _id: {
                id: string
            }
        }
    ]
    itemName: string;
    quantity: number;
}