import { ExplorePostList } from "../cmps/ExplorePostList"
import { useSelector } from "react-redux"
import {Outlet } from 'react-router-dom';


export function ExplorePage(){
    const posts = useSelector(storeState => storeState.postModule.posts)

    return (
        <section className="explore-page">
            <ExplorePostList posts={posts}/>
            <Outlet />
        </section>
    )
}