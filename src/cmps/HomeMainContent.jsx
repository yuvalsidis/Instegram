import { PostIndex } from "./PostIndex"
import { HomeSuggestion } from '../cmps/HomeSuggestion'


export function HomeMainContent(){
    return (
        <div className="home-main-content">
             <PostIndex/>
              {/* <HomeSuggestion /> */}
        </div>
    )
}