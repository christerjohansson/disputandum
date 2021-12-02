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
import { smallFont } from '../shared/helpers';

const ErrorNotificationMessage = styled.div`
  ${smallFont};

  position: relative;
  display: inline-block;
  padding: 12px 32px;
  background-color: #ffffff;
  color: ${props => props.theme.error};
  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 2px solid ${props => props.theme.error};
    border-radius: 2px 2px 0 0;
  }
`;

export default ErrorNotificationMessage;
