import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/layout';
import { config } from './config';
import { NotFoundPage } from './pages/not-found';
import { useRef, useEffect } from 'react';
import { CursorContext } from './cursor.context';
import './App.css';

function App() {

    const { navItems, defaultRoute } = config;

    const cursorRef = useRef<HTMLDivElement>(null);
    const outerCusorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editCursor = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            if (cursorRef.current) {
                cursorRef.current.style.left = x + 'px';
                cursorRef.current.style.top = y + 'px';
            }
            if (outerCusorRef.current) {
                outerCusorRef.current.style.left = x + 'px';
                outerCusorRef.current.style.top = y + 'px';
            }
        };
        window.addEventListener('mousemove', editCursor);
    }, []);

    const onLinkEntered = () => {
        if (outerCusorRef.current) {
            outerCusorRef.current.className = "big"; 
        }
    };

    const onLinkExited = () => {
        if (outerCusorRef.current) {
            outerCusorRef.current.className = "";
        }
    }


    return (
        <CursorContext.Provider value={{
            onLinkExited,
            onLinkEntered
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {navItems.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                        <Route index element={<Navigate to={defaultRoute} replace />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
            <div id="mouseCursor" ref={cursorRef} className="cursor z-20"></div>
            <div id="outerMouseCursor" ref={outerCusorRef} className="z-10"></div>
        </CursorContext.Provider>
    )
}

export default App
