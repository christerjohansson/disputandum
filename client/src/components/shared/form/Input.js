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
import { transition } from '../helpers';

const Input = styled.input`
  ${transition('border', 'box-shadow')};
  
  --border: ${props => props.error ? props.theme.error : props.theme.accent};
  --shadow: ${props =>
    props.error ? props.theme.error + '4d' : props.theme.accent + '4d'};
  
  display: block;
  ${props => props.error ? `
    border: 1px solid var(--border)
    ` : `
    border: 1px solid ${props.theme.border}
  `};
  border-radius: 3px;
  width: 100%;
  padding: 8px;
  background-color: ${props => props.theme.inputBackground};
  font-size: 15px;
  color: ${props => props.theme.normalText};
  appearance: none;
  outline: none;
  resize: vertical;
  
  :hover, :focus {
    border: 1px solid var(--border);
  }
  
  :focus {
    box-shadow: 0 0 0 2px var(--shadow);
  }
`;

export default Input;
