import React, { useEffect, useState } from 'react';
import { fetchResults } from '../api/search';

function Search() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetchResults().then(res => setResults(res.data));
    }, []);

    return (
        <div>
            <h2>Search Results</h2>
            {results.map((person, index) => (
                <div key={index}>
                    <img src={person.image} alt="Matched person" />
                    <p>Last Seen: {person.location}</p>
                </div>
            ))}
        </div>
    );
}

export default Search;
