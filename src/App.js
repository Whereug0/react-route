import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import HomePage from './pages/Home';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className={styles["App"]}>
      <header>
        <nav className={styles['navbar']}>
          <div className={styles['home-box']}>
            <Link to='/' >Home</Link>
          </div>
          <div className={styles['info-signIn']}>
            <Link to='/aboutus'>About Us</Link>
            
            <Link to='/signin'>Sign in</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/signin' element={<SignIn />}/>

      </Routes>

    </div>
  );
}

export default App;
