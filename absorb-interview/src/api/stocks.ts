import axios from 'axios';

export interface StockData {
    count: number;
    result: Stocks[];
}

export interface Stocks {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
}

const fetchStockData = async (symbol: string): Promise<StockData> => {
    const apiUrl = `https://us-central1-eng-interview.cloudfunctions.net/stock-api-proxy?q=${symbol}`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default fetchStockData;