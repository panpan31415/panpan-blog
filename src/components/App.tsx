import { Fragment } from 'react/jsx-runtime';
import './App.scss';
import NavigationArea from './NavigationArea';
import MainContent from './MainContent';
import NavigationContext from './NavigationContext';
import { useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

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
                <AnimatedCursor
                    outerSize={16}
                    color='231, 29, 54'
                />
            </div>
        </Fragment>
    );
}

export default App;
