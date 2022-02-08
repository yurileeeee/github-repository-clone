import Link from "next/link";

const App = () => {
    return (
        <div>
            <h2>Link to 'potato' Page</h2>
            <Link href="/vegetable/potato">
                <p>Move to '/vegetable/potato'</p>
            </Link>
        </div>
    );
};

export default App;
