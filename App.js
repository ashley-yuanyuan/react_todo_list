
import './App.css';
import Header from './components/Header.js'
import TopBar from './components/TopBar.js'
import BottomBar from './components/BottomBar.js'
import TodoList from './components/TodoList.js'
import React from 'react'
import {GlobalProvider} from './context/GlobalState.js'


function App() {
  return (
    <div className="App">
        <GlobalProvider>
          <Header />
          <TopBar />
          <BottomBar />

        </GlobalProvider>
     

     
    </div>
  );
}

export default App;
