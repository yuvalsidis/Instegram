import React from 'react';
import { Routes, Route } from 'react-router';
import routes from './routes';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { ProfilePage } from './pages/ProfilePage';

export function App() {
    return (
        <div className='app main-container'>
            <AppHeader />
            <main className='main'>
                <Routes>

                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.component} />
                    ))}

                    <Route path='/explore' element={<ExplorePage />}>
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                    <Route path='/' element={<HomePage />}>
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                    <Route path='/profile/:userId' element={<ProfilePage />}> </Route>
                </Routes>

            </main>
        </div>
    );
}
