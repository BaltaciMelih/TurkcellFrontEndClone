import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FilterList from '../components/FilterList/FilterList';
import GamesHero from '../components/GamesHero/GamesHero';
import GamesMain from '../components/GamesMain/GamesMain';
import FilterModal from '../components/FilterModal/FilterModal';
import Header from '../components/Header/Header';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import { gamesAction } from '../reduxStore/games';
import Footer from '../components/Footer/Footer';
function Games() {
  const dispatch = useDispatch();
  const [reversed, setReversed] = useState(false);

  useEffect(() => {
    dispatch(gamesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <GamesHero />
      <div className='container-fluid'>
        <div className='row bg-black py-3 '>
          <div className='col-4 d-none d-lg-block'>
            <h3 className=' text-white text-center text-lg-start py-3 py-sm-0 '>Browse Games</h3>
            <FilterList />
          </div>
          <div className=' col col-lg-8  px-3'>
            <div className='d-flex justify-content-between  justify-content-lg-end gap-2 py-3 py-lg-1'>
              <FilterModal />
              <SortDropdown setReversed={setReversed} />
            </div>
            <GamesMain reversed={reversed} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;
