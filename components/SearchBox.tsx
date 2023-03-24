import React from 'react';
import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex:1;
`;

const SearchBoxInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const SearchBoxButton = styled.button`
  margin-left: 10px;
  padding: 12px 16px;
  background-color: var(--nextui-colors-secondary);
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

function SearchBox() {
  return (
    <SearchBoxWrapper>
      <SearchBoxInput type="text" />
      <SearchBoxButton>Search</SearchBoxButton>
    </SearchBoxWrapper>
  );
}
export default SearchBox