// import { CarIndex } from './pages/CarIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminApp } from './pages/AdminIndex.jsx'

//Pages
import { HomePage } from './pages/HomePage.jsx'
import { ExplorePage } from './pages/ExplorePage.jsx'
import { DirectPage } from './pages/DirectPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: '/explore',
        component: <ExplorePage />,
        label: 'Explore'
    },
    {
        path: '/direct',
        component: <DirectPage />,
        label: 'Direct'
    },
    {
        path: '/profile',
        component: <ProfilePage />,
        label: 'Profile'
    }

    // {
    //     path: 'car',
    //     component: <CarIndex />,
    //     label: 'Cars'
    // },
    // {
    //     path: 'review',
    //     component: <ReviewIndex />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes