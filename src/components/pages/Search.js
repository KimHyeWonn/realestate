import React from 'react';
import queryString from 'query-string';
import SearchPage from '../searchPage/SearchPage';
import MapPage from '../MapPage/MapPage';
import ForSale from '../ForSalePage/ForSalePage'
const style4 = {
    display:'inline'
}
const style1 = {
    width:'100%'
};
const style2 = {
    float:'left', 
    width:'70%', 
    
};
const style3 = {
    float:'right',
    width:'30%',
};

const Search = ({location,match}) =>{
    const query = queryString.parse(location.search);
    const detail = query.detail === 'hi';

    return (
        <div>
            <h2>검색 {match.params.name}</h2>
            <SearchPage style = {style1}/>
            
            <MapPage style={style2}/><ForSale style={style3}/>
            {detail && 'detail: blahblah'}
        </div>
    );
};
export default Search;