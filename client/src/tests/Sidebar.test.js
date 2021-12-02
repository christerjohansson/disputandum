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
import Sidebar from '../components/Sidebar/Component';
import SidebarCategoryList from '../components/Sidebar/CategoryList';
import SidebarCreatePostButton from '../components/Sidebar/CreatePostButton';

it('renders without crashing', () => {
  shallow(<Sidebar />);
});

it('renders a list of categories', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.contains(<SidebarCategoryList />)).toEqual(true);
});

it('renders a create post button if user is logged in', () => {
  const wrapper = shallow(<Sidebar token />);
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(true);
});

it('doesn\'t render a create post button if user is not logged in', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.contains(<SidebarCreatePostButton />)).toEqual(false);
});
