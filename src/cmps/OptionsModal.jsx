
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function OptionsModal({setIsOptionsModalOpen}) {
    const locationPathname = useLocation().pathname


    useEffect(() => {
        if(locationPathname.includes('profile') || locationPathname.includes('explore')) return
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, [])

    return (
        <section className="options-modal">
        {locationPathname.includes('profile') && (
            <button className='delete-btn'>Delete</button>
        )}
        </section>
    )
}