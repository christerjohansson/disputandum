/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import styled from 'styled-components/macro';
import { transition } from '../../shared/helpers';

const Icon = styled.svg`
  width: 20px;
  height: 20px;

  & path {
    ${transition('fill')};

    fill: ${props => props.theme.mutedText};
  }
  
  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
  }
`;

const HeaderDarkButtonIcon = () => (
  <Icon viewBox='0 0 24 24'>
    <path
      d='M6.03569223,7.86020138e-11 C4.77338857,1.342144 4,3.14939605 4,5.13728269 C4,9.27941831 7.35786438,12.6372827 11.5,12.6372827 C13.4878866,12.6372827 15.2951387,11.8638941 16.6372827,10.6015905 C15.5809549,14.0943073 12.3374493,16.6372827 8.5,16.6372827 C3.80557963,16.6372827 0,12.8317031 0,8.13728269 C0,4.29983338 2.54297542,1.05632781 6.03569223,0 Z'
      transform='translate(4 4)'
    />
  </Icon>
);

export default HeaderDarkButtonIcon;
