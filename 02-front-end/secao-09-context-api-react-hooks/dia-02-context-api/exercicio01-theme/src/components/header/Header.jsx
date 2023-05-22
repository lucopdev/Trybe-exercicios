import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Header(props) {
  const theme = useContext(ThemeContext);
  console.log(theme.color);
  return (
    <header className="header">
      <h1>Theme Test</h1>
      <button onClick={() => theme.toggleTheme()}>tema</button>
    </header>
  );
}

export default Header;