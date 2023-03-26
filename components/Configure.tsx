import React from 'react';
import { Configure, createClassNames } from 'react-instantsearch-dom';
import styled from 'styled-components';

const cx = createClassNames('CustomConfigure');

const CustomConfigure = styled(Configure)`
  display: none;
`;

export default CustomConfigure;
