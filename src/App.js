import DisplayBox from "./DisplayBox";
import SearchColor from "./SearchColor";
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <main className="main-container">
      <DisplayBox
        color={color}
        isDarkText={isDarkText}
      />
      <SearchColor
        color={color}
        setColor={setColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
