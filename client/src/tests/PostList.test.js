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
import PostList from '../components/PostList/Component';
import PostListItem from '../components/PostList/Item';
import Empty from '../components/shared/Empty';
import LoadingIndicatorBox from '../components/shared/LoadingIndicator/Box';

it('renders without crashing', () => {
  shallow(<PostList fetchPosts={fn => fn} />);
});

it('renders a list of posts', () => {
  const posts = [{}, {}, {}];
  const wrapper = shallow(<PostList fetchPosts={fn => fn} posts={posts} />);
  expect(wrapper.children()).toHaveLength(posts.length);
  expect(wrapper.contains(<PostListItem />)).toEqual(true);
});

it('renders a loading indicator while fetching', () => {
  const wrapper = shallow(<PostList fetchPosts={fn => fn} isFetching />);
  expect(wrapper.contains(<LoadingIndicatorBox />)).toEqual(true);
});

it('renders a message when there are no posts', () => {
  const wrapper = shallow(<PostList fetchPosts={fn => fn} />);
  expect(wrapper.contains(<Empty />)).toEqual(true);
});
