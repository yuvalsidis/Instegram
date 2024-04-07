import React from 'react'
import { Routes, Route, Outlet } from 'react-router'
import routes from './routes'
import { AppHeader } from './cmps/AppHeader'
import { PostDetailsPage } from './pages/PostDetailsPage'

export function App() {

    return (
        <div className='app main-container'>
            <AppHeader />
            <main className='main'>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                </Routes>
                <route path="/p/:postId" element={<OutletWithPostDetailsPage />}></route>
            </main>
        </div>
    )
}

function OutletWithPostDetailsPage() {
    return (
        <>
            <Outlet />
            <PostDetailsPage />
        </>
    )
}
