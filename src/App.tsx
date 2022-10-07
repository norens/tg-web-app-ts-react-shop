import React, {useEffect} from 'react';
import './App.css';

let tg = window.Telegram.WebApp;


function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close();
    }
    return (
        <div>
            <button onClick={onClose}>
                close
            </button>
        </div>
    );
}

export default App;
