
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function OptionsModal({ setIsOptionsModalOpen }) {
    const locationPathname = useLocation().pathname


    useEffect(() => {
        if (locationPathname.includes('profile') || locationPathname.includes('explore')) return
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, [])

    function handleClickOnCancelBtn() {
        setIsOptionsModalOpen(false)
    }

    return (
        <section className="options-modal">

            <div className="options-modal-container">
                {locationPathname.includes('profile') && (
                    <>
                        <button className='delete-btn'>Delete</button>
                        <button className='cancel-btn' onClick={handleClickOnCancelBtn}>Cancel</button>
                    </>
                )}
                {locationPathname.includes('explore') && (
                    <>
                        <button className='cancel-btn' onClick={handleClickOnCancelBtn}>Cancel</button>
                    </>
                )}
                {locationPathname === '/' && (
                    <>
                        <button className='cancel-btn' onClick={handleClickOnCancelBtn}>Cancel</button>
                    </>
                )}

            </div>
        </section>
    )
}