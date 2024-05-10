import React, { useRef, useState} from 'react';
import './App.css';
import List from './components/List/List';
import ThemeContext from './components/contexts/ThemeContext';
import Toggle from './components/Toggle/Toggle';
function App() {

  const initialItems = ['Hello', 'Pavel', 'in', 'It'];

  const [items, setItems] = useState(initialItems);


  const textInput = useRef(null);

  const focusInput = () => {
    textInput.current.focus()
  };

  const addItems = (event) => {
    if (event.key === 'Enter') {
      const newItem = event.target.value.trim();
      if (newItem !== '') {
        setItems([...items, newItem]);
        event.target.value = '';
      }
    }
  };

  // context 
  const [darkMode, setMode] = useState(false)

  const toggleTheme = () => {
    setMode(prevMode => !prevMode)
  };



  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`App transition duration-500  ${darkMode ? "bg-gray-100 shadow-2xl" : "bg-gray-800"}`}>
        <input type='text'
          className='inputApp'
          ref={textInput}
          onKeyDown={addItems} />
        <button className={`${darkMode ? "buttonApp" : "buttonAppDark"}`}
          onClick={() => focusInput()}
        >
          focusClick
        </button>
        <List items={items} />
        <Toggle />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
