import { HomeSuggestionHeader } from "./HomeSuggestionHeader"
import { SuggestForYou } from "./SuggestForYou"
import { AboutUs } from "./AboutUs"

export function HomeSuggestion(){
    return (
        <div className="home-suggestion">
            <h1>Hi i am home suggestion</h1>
            <HomeSuggestionHeader/>
            <SuggestForYou/>
            <AboutUs/>
        </div>
    )
}