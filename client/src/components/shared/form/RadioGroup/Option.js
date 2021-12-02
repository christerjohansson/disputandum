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
import styled from 'styled-components';
import { transition, wideFont } from '../../helpers';

const Label = styled.label`
  ${transition('color', 'background-color')};
  ${wideFont};

  display: block;
  flex: 1 1 100%;
  border: 1px solid ${props => props.theme.accent};
  width: 100%;
  padding: 8px;
  background: ${props => (props.active ? props.theme.accent : 'transparent')};
  cursor: pointer;
  text-align: center;
  color: ${props => (props.active ? '#ffffff' : props.theme.accent)};
  outline: 0;

  @media (hover: hover) {
    :hover {
      background: ${props => props.theme.accent};
      color: #ffffff;
    }
  }

  :first-of-type {
    border-radius: 3px 0 0 3px;
  }

  :last-of-type {
    border-radius: 0 3px 3px 0;
  }

  :not(:first-of-type) {
    border-left: 0;
  }
`;

const RadioGroupOption = props => (
  <>
    <input
      type='radio'
      name='radiogroup'
      id={props.value}
      onChange={props.onClick}
    />
    <Label htmlFor={props.value} active={props.active}>
      {props.label}
    </Label>
  </>
);

export default RadioGroupOption;
