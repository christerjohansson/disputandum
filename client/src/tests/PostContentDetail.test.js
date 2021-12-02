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
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import moment from 'moment';
import PostContentDetail from '../components/Post/Content/Detail';

it('renders without crashing', () => {
  shallow(<PostContentDetail />);
});

it('renders the information correctly', () => {
  const data = {
    author: { username: 'author' },
    category: 'category',
    created: '2018-11-05T05:02:38.544Z',
    commentCount: 0
  };

  const wrapper = mount(
    <MemoryRouter>
      <PostContentDetail {...data} />
    </MemoryRouter>
  );
  const links = wrapper.find('a');
  const timestamp = wrapper.find('span').at(1);

  expect(links.at(0).text()).toEqual('0 comments');
  expect(links.at(1).text()).toEqual(`/a/${data.category}`);
  expect(links.at(2).text()).toEqual(data.author.username);
  expect(timestamp.text()).toEqual(moment(data.created).fromNow());
});
