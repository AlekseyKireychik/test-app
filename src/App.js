import React from 'react';
import './App.css';
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header.jsx"
import Products from  "./components/products/Products.jsx"

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <aside>
                            <Filter />
                        </aside>
                        <Products />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
