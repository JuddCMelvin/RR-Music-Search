// SeachBar.js
import { useState } from 'react'

interface SearchBarProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>, searchTerm: string) => void
} 

function SeachBar(props: SearchBarProps) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            }/>

            <input type="submit" />

        </form>
    )
}

export default SeachBar