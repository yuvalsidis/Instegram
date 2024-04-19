import { useState } from "react";

export function CreatePostMainFilter({ setFilterStyles }) {
    const [selectedFilter, setSelectedFilter] = useState(null)

    const filterStylesMap = {
        Aden: {
            filter: 'contrast(85%) brightness(120%) saturate(85%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Clarendon: {
            filter: 'contrast(140%) brightness(120%) saturate(90%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Crema: {
            filter: 'contrast(120%) brightness(110%) saturate(90%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Gingham: {
            filter: 'contrast(105%) brightness(115%) saturate(110%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Juno: {
            filter: 'contrast(130%) brightness(120%) saturate(100%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Lark: {
            filter: 'contrast(110%) brightness(110%) saturate(125%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Ludwig: {
            filter: 'contrast(90%) brightness(110%) saturate(110%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Moon: {
            filter: 'contrast(105%) brightness(100%) saturate(0%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Normal: {
            filter: 'contrast(100%) brightness(100%) saturate(100%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Perpetua: {
            filter: 'contrast(130%) brightness(105%) saturate(110%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Reyes: {
            filter: 'contrast(130%) brightness(90%) saturate(110%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
        Slumber: {
            filter: 'contrast(110%) brightness(115%) saturate(110%) sepia(0%)',
            transition: 'filter 0.1s ease-in-out',
        },
    };

    const handleFilterClick = (filterName) => {
        setFilterStyles(filterStylesMap[filterName])
        setSelectedFilter(filterName)
    };

    return (
        <div className="create-post-main-filter">
            <div className="create-post-main-filter-title">Filters</div>
            <div className="filter-list">
                {Object.keys(filterStylesMap).map((filterName) => (
                    <div
                        key={filterName}
                        className={`filter-preview`}
                        onClick={() => handleFilterClick(filterName)}
                    >
                        <img 
                            className={`create-post-main-filter-img ${selectedFilter === filterName ? 'selected filter-border' : ''}`}
                            src={`/public/filterimg/${filterName}.jpg`}
                            alt={`${filterName} img`}
                        />
                        <p>{filterName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
