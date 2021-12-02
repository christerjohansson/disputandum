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
import { Field } from 'redux-form';
import categories from '../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const postTypes = [
  {
    label: 'link',
    value: 'link'
  },
  {
    label: 'text',
    value: 'text'
  }
];

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => this.props.attemptCreatePost(post);

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name='title' label='title' type='text' component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name='url' label='url' type='url' component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <Field
            name='text'
            label='text'
            type='textarea'
            component={renderField}
          />
        )}
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
