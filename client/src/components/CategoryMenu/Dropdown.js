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
import categories from '../../categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 8px 16px;
  background-color: ${props => props.theme.foreground};
  font-size: 15px;
  color: ${props => props.theme.normalText};
  appearance: none;
`;

class CategoryMenuDropdown extends React.Component {
  mapCategories = () =>
    ['all', ...categories].map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = event => {
    const category = event.target.value;
    if (category !== this.props.category) {
      const url = category === 'all' ? '/' : `/a/${category}`;
      this.props.history.push(url);
    }
  };

  render() {
    return (
      <SelectWrapper flex>
        <Dropdown value={this.props.category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default CategoryMenuDropdown;
