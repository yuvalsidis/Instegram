import React from 'react';
import { Routes, Route} from 'react-router';
import routes from './routes';
import { AppHeader } from './cmps/AppHeader';
import { PostDetailsPage } from './pages/PostDetailsPage';


export function App() {
    return (
        <div className='app main-container'>
            <AppHeader /> 
            <main className='main'>
                <Routes>
                    {routes.map(route => {
                        console.log('Route path:', route.path);
                        return (
                            <Route key={route.path} path={route.path} element={route.component}>
                                {route.path === '/' || route.path === '/explore' ? (
                                    <Route path={`p/:postId`} element={<PostDetailsPage />} />
                                ) : null}
                            </Route>
                        );
                    })}
                </Routes>
            </main>
        </div>
    );
}