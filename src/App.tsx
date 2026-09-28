import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BottomNav from './components/BottomNav/BottomNav'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import CategoryPage from './pages/CategoryPage'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
