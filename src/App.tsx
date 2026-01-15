import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { PRIMARY_NAV_ITEMS } from '@/components/layout/header/constant/header';
import { MoviePage } from '@/pages/movie-page';
import { FavoritePage } from '@/pages/favorite-page';
import { SearchPage } from '@/pages/search-page';
import { HomePage } from '@/pages/home-page';

function App() {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col bg-black'>
        <Header navItem={PRIMARY_NAV_ITEMS} />

        <div className='grow'>
          <Routes>
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/favorites' element={<FavoritePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export { App };
