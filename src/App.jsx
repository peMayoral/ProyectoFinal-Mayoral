import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';



export default function app() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<ItemListContainer greeting={"Bienvenidos a Pedro Store"}/>}/>
                <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}