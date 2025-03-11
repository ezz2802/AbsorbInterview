import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Home() {
    const globalContext = useContext(GlobalContext);

    if (!globalContext) {
        throw new Error('GlobalContext must be used within a GlobalProvider');
    }

    // const { count, setCount } = globalContext;

    return (
        <div>
            <h1>Hello, World!</h1>
            {/* <p>Count: {count}</p> */}
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
        </div>
    );
}

export default Home;