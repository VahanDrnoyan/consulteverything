import React from 'react';
import CustomClearFilters from './CustomClearFilters';
import CustomRefinementList from './CustomRefinementList';
import CustomPagination from './Custompagination';
import SearchBox from './SearchBox'
import CustomConfigure from './Configure';
import { Hits } from 'react-instantsearch-dom'

function Search() {
  return (
    <div style={{ flex: 1}}>
        <div style={{ width: '100%'}}>
        <SearchBox></SearchBox>
        </div>
      <CustomClearFilters />
      <CustomConfigure hitsPerPage={8} />
      <CustomRefinementList attribute="category" />
      <Hits />
      <CustomPagination />
    </div>
  );
}

export default Search;
