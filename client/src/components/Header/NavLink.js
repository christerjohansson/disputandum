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

import styled from 'styled-components/macro';
import NavLink from '../shared/NavLink';
import { headerItem, wideFont, link, transition } from '../shared/helpers';

const HeaderNavLink = styled(NavLink)`
  ${headerItem};
  ${wideFont};
  ${link};
  
  position: relative;
  cursor: pointer;
  color: ${props => props.theme.mutedText};
  
  ::after {
    ${transition('opacity', 'border-bottom-width')};
    
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-bottom: 1px solid ${props => props.theme.accent};
  }
  
  :hover::after {
    opacity: 1;
  }
  
  &.active::after {
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 3px solid ${props => props.theme.accent};
  }
`;

export default HeaderNavLink;
