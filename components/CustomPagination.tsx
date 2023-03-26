import React from 'react';
import { Pagination, createClassNames } from 'react-instantsearch-dom';
import styled from 'styled-components';

const cx = createClassNames('CustomPagination');

const CustomPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .ais-Pagination-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ais-Pagination-item {
    margin-right: 5px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    &:hover {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
    &.ais-Pagination-item--selected {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
  }
`;

export default CustomPagination;
