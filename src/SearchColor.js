import { useRef } from 'react'
const SearchColor = ({ color, setColor, isDarkText, setIsDarkText }) => {
    const focusRef = useRef('')
    return (
        <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
            <input
                autofocus
                ref={focusRef}
                id='searchColor'
                placeholder='Add Color Name:'
                type='text'
                role='searchbox'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            >
            </input>
            <button
                onClick={() => setIsDarkText(!isDarkText)}>
                Toggle Color
            </button>
        </form>

    )
}

export default SearchColor