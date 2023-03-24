import React from 'react';
import { RefinementList, createClassNames } from 'react-instantsearch-dom';
import styled from 'styled-components';

const cx = createClassNames('CustomRefinementList');

const CustomRefinementList = styled(RefinementList).attrs(() => ({
  className: cx('root'),
}))`
  .ais-RefinementList-item {
    margin-bottom: 10px;
  }
  .ais-RefinementList-labelText {
    font-weight: bold;
  }
  .ais-RefinementList-count {
    color: #999;
    margin-left: 5px;
  }
  .ais-RefinementList-checkbox {
    margin-right: 5px;
  }
`;

export default CustomRefinementList;
