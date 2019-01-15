import React from 'react';
import queryString from 'query-string';

const Search = ({location,match}) =>{
    const query = queryString.parse(location.search);
    const detail = query.detail === 'hi';

    return (
        <div>
            <h2>검색 {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};
export default Search;