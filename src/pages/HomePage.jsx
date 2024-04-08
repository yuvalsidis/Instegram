import React from 'react'
import { HomeMainContent } from '../cmps/HomeMainContent'
import {Outlet } from 'react-router-dom';

export function HomePage() {
    return (
        <section className='home-page'>
            <HomeMainContent />
            <Outlet/>
        </section>
    )
}