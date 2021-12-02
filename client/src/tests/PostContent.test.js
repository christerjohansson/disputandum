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
import { shallow } from 'enzyme';
import PostContent from '../components/Post/Content';
import PostContentTitle from '../components/Post/Content/Title';
import PostContentPreview from '../components/Post/Content/Preview';
import PostContentDetail from '../components/Post/Content/Detail';
import PostContentFullText from '../components/Post/Content/FullText';

it('renders without crashing', () => {
  shallow(<PostContent />);
});

it("renders the post's title, content preview, and details", () => {
  const wrapper = shallow(<PostContent type='link' />);
  expect(wrapper.find(PostContentTitle).exists()).toEqual(true);
  expect(wrapper.find(PostContentPreview).exists()).toEqual(true);
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true);
});

it('renders the full text of a text post', () => {
  const text = 'example test post';
  const wrapper = shallow(<PostContent type='text' text={text} showFullPost />);
  expect(wrapper.find(PostContentFullText).exists()).toEqual(true);
  expect(
    wrapper
      .find(PostContentFullText)
      .children()
      .text()
  ).toEqual(text);
});