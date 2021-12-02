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
import Header from '../components/Header/Component';
import HeaderLogo from '../components/Header/Logo';
import HeaderDarkButtonContainer from '../components/Header/DarkButton/Container';
import HeaderUsername from '../components/Header/Username';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders a logo link', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<HeaderLogo />)).toEqual(true);
});

it('renders a dark mode toggle button', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(<HeaderDarkButtonContainer />)).toEqual(true);
});

it('renders log in and sign up links when not logged in', () => {
  const wrapper = shallow(<Header />);
  const links = wrapper.find('NavLink__HeaderNavLink');

  expect(links).toHaveLength(2);
  expect(links.at(0).text()).toEqual('log in');
  expect(links.at(1).text()).toEqual('sign up');
});

it('renders a log out link when logged in', () => {
  const wrapper = shallow(<Header user />);
  const link = wrapper.find('NavLink__HeaderNavLink');
  expect(link.text()).toEqual('log out');
});

it('renders the user\'s username when logged in', () => {
  const username = 'deniz';
  const wrapper = shallow(<Header user={{ username }} />);
  expect(wrapper.contains(<HeaderUsername username={username} />)).toEqual(
    true
  );
});
