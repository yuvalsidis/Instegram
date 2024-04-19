import { useState } from "react";

export function CreatePostMainFilter() {
    const [filterStyles, setFilterStyles] = useState({});

    // Define the CSS styles for each filter
    const filterStylesMap = {
        Aden: {
            filter: 'contrast(85%) brightness(120%) saturate(85%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Clarendon: {
            filter: 'contrast(140%) brightness(120%) saturate(85%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Crema: {
            filter: 'contrast(115%) brightness(120%) saturate(85%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Gingham: {
            filter: 'contrast(100%) brightness(100%) saturate(0) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Juno: {
            filter: 'contrast(150%) brightness(120%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Lark: {
            filter: 'contrast(110%) brightness(110%) saturate(120%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Ludwig: {
            filter: 'contrast(90%) brightness(110%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Moon: {
            filter: 'contrast(110%) brightness(120%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Normal: {
            filter: 'contrast(100%) brightness(100%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Perpetua: {
            filter: 'contrast(150%) brightness(105%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Reyes: {
            filter: 'contrast(150%) brightness(75%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
        Slumber: {
            filter: 'contrast(110%) brightness(120%) saturate(100%) sepia(0%)',
            transition: 'filter 0.5s ease-in-out',
        },
    };

    // Function to handle filter click
    const handleFilterClick = (filterName) => {
        // Update the state with styles for the clicked filter
        setFilterStyles(filterStylesMap[filterName]);
    };

    return (
        <div className="create-post-main-filter">
            <div className="create-post-main-filter-title">Filters</div>
            <div className="filter-list">
                {Object.keys(filterStylesMap).map((filterName) => (
                    <div key={filterName} className="filter-preview" onClick={() => handleFilterClick(filterName)}>
                        <img className="create-post-main-filter-img" src={`/public/filterimg/${filterName}.jpg`} alt={`${filterName} img`} />
                        <p>{filterName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
