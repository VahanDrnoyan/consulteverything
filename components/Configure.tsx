import React from 'react';
import { Configure, createClassNames } from 'react-instantsearch-dom';
import styled from 'styled-components';

const cx = createClassNames('CustomConfigure');

const CustomConfigure = styled(Configure).attrs(() => ({
  className: cx('root'),
}))`
  display: none;
`;

export default CustomConfigure;
