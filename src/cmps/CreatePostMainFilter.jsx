import { useState } from "react"

export function CreatePostMainFilter() {
    const [activeFilter, setActiveFilter] = useState(null);


    // will be filters and handle on filter and then adjust the filter on that class create-post-filter
     
    return (
        <div className="create-post-main-filter">
            <div className="create-post-main-filter-title">Filters</div>
            <div className="filter-list">
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Aden.jpg" alt="Aden img" />
                    <p>Aden</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Clarendon.jpg" alt="Clarendon img" />
                    <p>Clarendon</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Crema.jpg" alt="Crema img" />
                    <p>Crema</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Gingham.jpg" alt="Gingham img" />
                    <p>Gingham</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Juno.jpg" alt="Juno img" />
                    <p>Juno</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Lark.jpg" alt="Lark img" />
                    <p>Lark</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Ludwig.jpg" alt="Ludwig img" />
                    <p>Ludwig</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Moon.jpg" alt="Moon img" />
                    <p>Moon</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Normal.jpg" alt="Normal img" />
                    <p>Normal</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Perpetua.jpg" alt="Perpetua img" />
                    <p>Perpetua</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Reyes.jpg" alt="Reyes img" />
                    <p>Reyes</p>
                </div>
                <div className="filter-preview">
                    <img className="create-post-main-filter-img" src="/public/filterimg/Slumber.jpg" alt="Slumber img" />
                    <p>Slumber</p>
                </div>
                

            </div>
        </div>
    )
}