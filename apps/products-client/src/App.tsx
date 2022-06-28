import React from 'react';
import logo from './logo.svg';
import './App.css';

import ImageApp from './components/ui-components/image';
import HeaderApp from './components/ui-components/headerApp';
import ProductsPage from './components/pages/productsPage';
import AppDate from './components/app/date';

function App() {
    return (
        <div className="App">
            <HeaderApp text={"Application"} />
            <AppDate />
            <ProductsPage />
            <ImageApp src={""} />
            <ImageApp src={"https://m.media-amazon.com/images/M/MV5BMTU4MzYzMzc4N15BMl5BanBnXkFtZTgwMTg3ODA3MzI@._V1_.jpg"} />
        </div>
    );
}


export default App;
