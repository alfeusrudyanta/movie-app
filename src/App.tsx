import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { PRIMARY_NAV_ITEMS } from '@/components/layout/header/header.constants';
import { MoviePage } from '@/pages/movie-page';
import { FavoritePage } from '@/pages/favorite-page';
import { SearchPage } from '@/pages/search-page';

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
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export { App };
