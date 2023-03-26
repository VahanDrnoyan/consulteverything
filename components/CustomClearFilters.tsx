import React from 'react';
import { ClearRefinements, createClassNames } from 'react-instantsearch-dom';
import styled from 'styled-components';

const cx = createClassNames('CustomClearFilters');

const CustomClearFilters = styled(ClearRefinements)`
  button {
    background-color: #fff;
    color: #111;
    border: none;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px;
  }
`;

export default CustomClearFilters;
