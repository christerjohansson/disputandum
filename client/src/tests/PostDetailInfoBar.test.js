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
import PostDetailInfoBar from '../components/PostDetail/InfoBar/Component';
import DeleteButton from '../components/shared/DeleteButton';

it('renders without crashing', () => {
  shallow(<PostDetailInfoBar />);
});

it('renders the information correctly', () => {
  const data = {
    views: 10,
    upvotePercentage: 50
  };

  const wrapper = shallow(<PostDetailInfoBar {...data} />);
  const details = wrapper.find('span');

  expect(details.at(0).text()).toEqual(`${data.views} views`);
  expect(details.at(2).text()).toEqual(`${data.upvotePercentage}% upvoted`);
});

it('renders a delete button when author is logged in', () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'abc123' }
  };

  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  expect(
    wrapper.contains(
      <DeleteButton
        onClick={wrapper.instance().deletePost}
      />
    )
  ).toEqual(true);
});

it('doesn\'t render a delete post button if user is not author', () => {
  const data = {
    user: { id: 'abc123' },
    author: { id: 'def456' }
  };

  const wrapper = shallow(<PostDetailInfoBar token {...data} />);

  expect(
    wrapper.contains(
      <DeleteButton
        deletePost={wrapper.instance().deletePost}
      />
    )
  ).toEqual(false);
});

it('doesn\'t render a delete post button if user is not logged in', () => {
  const wrapper = shallow(<PostDetailInfoBar />);
  expect(
    wrapper.contains(
      <DeleteButton
        deletePost={wrapper.instance().deletePost}
      />
    )
  ).toEqual(false);
});
