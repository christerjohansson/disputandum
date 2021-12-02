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
import { Field } from 'redux-form';
import Input from '../shared/form/Input';

const TextArea = styled(Input)`
  margin: 0;
  border: none;
  border-bottom: 1px solid ${props => props.theme.border};
  border-radius: 0;
  resize: none;

  :hover,
  :focus {
    border: none;
    border-bottom: 1px solid ${props => props.theme.border};
    box-shadow: none;
  }
`;

class CommentFormTextArea extends React.Component {
  onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSubmit();
    }
  };

  renderField = field => (
    <TextArea
      as='textarea'
      {...field.input}
      placeholder='enter your comment'
      rows='2'
      onKeyDown={this.onKeyDown}
    />
  );

  render() {
    return <Field name={this.props.name} component={this.renderField} />;
  }
}

export default CommentFormTextArea;
