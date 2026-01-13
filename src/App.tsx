import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { PRIMARY_NAV_ITEMS } from '@/components/layout/Header/Header.constants';
import { MoviePage } from '@/pages/MoviePage';
import { FavoritePage } from '@/pages/FavoritePage';

function App() {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col bg-black'>
        <Header navItem={PRIMARY_NAV_ITEMS} />

        <div className='grow'>
          <Routes>
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/favorites' element={<FavoritePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
