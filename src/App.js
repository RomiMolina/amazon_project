import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage, NavBar, SearchResults, Checkout, ProductPage } from './components';

function App() {
  return (
   <BrowserRouter>
   <NavBar />
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/checkout' element={<Checkout />} />
        <Route  path='/search' element={<SearchResults />} />
        <Route  path='/product/:id' element={<ProductPage />} />
        <Route  path='/checkout' element={<Checkout />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
