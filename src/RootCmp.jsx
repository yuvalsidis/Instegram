import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import routes from './routes';
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { CreatePostModal } from './cmps/CreatePostModal';


export function App() {
    const [isCreatingPost, setIsCreatingPost] = useState(false)

    const handleOpenCreatePost = () => {
        setIsCreatingPost(true)
        document.body.classList.toggle('modal-open')
      }
    
    const handleCloseCreatePost = () => {
        setIsCreatingPost(false)
        document.body.classList.toggle('modal-open')
      }
    

    return (
        <div className='app main-container'>
            {/* <div className='main-screen' onClick={handleCloseCreatePost}></div> */}
            <AppHeader handleOpenCreatePost={handleOpenCreatePost}/>
            {isCreatingPost && (
              <CreatePostModal
                isOpen={isCreatingPost}
                onClose={handleCloseCreatePost}
                // onSubmit={handlePostCreation}
              />
            )}
            <main className='main'>
                <Routes>

                    {routes.map(route => (
                        <Route key={route.path} path={route.path}  element={route.component} />
                    ))}

                    <Route path='/explore' element={<ExplorePage />} >
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                    <Route path='/' element={<HomePage />}>
                        <Route path='p/:postId' element={<PostDetailsPage />} />
                    </Route>
                </Routes>

            </main>
        </div>
    );
}
