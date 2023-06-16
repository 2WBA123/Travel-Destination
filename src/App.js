import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginSection from './pages/Login/LoginPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      
      <Router >
      <Header />
        <Routes>
          <Route path='/' element={<LoginSection />} />
          <Route path='/aboutus' element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
      

    </>

  );
}

export default App;
