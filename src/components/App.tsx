import { Fragment } from 'react/jsx-runtime';
import './App.scss';
import NavigationArea from './NavigationArea';
import MainContent from './MainContent';
import NavigationContext from './NavigationContext';
import { useState } from 'react';

function App() {
    const [activeRoute, setActiveRoute] = useState('about');
    return (
        <Fragment>
            <div className='app-wrapper'>
                <div className='app'>
                    <NavigationContext.Provider
                        value={{
                            activeRoute,
                            setActiveRoute,
                        }}
                    >
                        <NavigationArea />
                        <MainContent />
                    </NavigationContext.Provider>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
