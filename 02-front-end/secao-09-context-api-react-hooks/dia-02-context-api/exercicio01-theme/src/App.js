import { useState } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import Header from './components/header/Header';
import ImageComponent from './components/imageComponent/ImageComponent';
import Footer from './components/footer/Footer';

function App() {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={`app ${themeColor}`}>
        <Header />
        <ImageComponent />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
