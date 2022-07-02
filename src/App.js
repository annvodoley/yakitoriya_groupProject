import React from 'react';
import {Routes} from 'react-router-dom';
import './App.module.scss';
import SectionMenu from './components/SectionMenu/SectionMenu';


function App() {
    return (
        <div className="App">
            <SectionMenu text='я люблю метро' imgUrl='https://firebasestorage.googleapis.com/v0/b/tabs-e2a0a.appspot.com/o/sasimi.png?alt=media&token=3deb73ab-9f35-4ac9-bab8-3f66f82c8f63'/>
        </div>
    );
}

export default App;
