import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import fetchStockData, { StockData } from "../api/stocks";

function Home() {
    const [stocks, setStocks] = useState<StockData>({
        count: 0,
        result: []
    });
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [debouncedQuery, setDebouncedQuery] = useState<string>("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 1);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedQuery.trim() === "") return;

        const fetchData = async () => {
            try {
                const result = await fetchStockData(debouncedQuery);
                setStocks(result);
                setError("")
            } catch (error) {
                setError(error.message)
                console.error("Error fetching stock data:", error);
            }
        };

        fetchData();
    }, [debouncedQuery]);

    // const handleSearch = async (search: string) => {
    //     if (search.trim() === "") return;
    //     try {
    //         const result = await fetchStockData(search);
    //         setStocks(result);
    //     } catch (error) {
    //         console.error("Error fetching stock data:", error);
    //     }
    // };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Enter stock symbol (e.g., GOOG)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
            />
            {error}
            {stocks.result.map((stock, index) => (
                <li key={index} className={styles.stockItem}>
                    <strong>{stock.displaySymbol}</strong>: {stock.description}
                </li>
            ))}
        </div>
    );
}

export default Home;