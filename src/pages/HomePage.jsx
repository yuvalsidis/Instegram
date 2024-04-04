import React from 'react'
import { HomeMainContent } from '../cmps/HomeMainContent'
import { HomeSuggestion } from '../cmps/HomeSuggestion'


export function HomePage() {
    return (
        <section className='home-page'>
            <HomeMainContent />
            {/* <HomeSuggestion /> */}
        </section>
    )
}