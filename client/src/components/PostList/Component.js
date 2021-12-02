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
import PostListItem from './Item';
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';

const List = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

class PostList extends React.Component {
  loadPosts = () => {
    const { username, category } = this.props;
    if (username) return this.props.fetchProfile(username);
    return this.props.fetchPosts(category);
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.category !== prevProps.category ||
      this.props.username !== prevProps.username
    )
      this.loadPosts();
  }

  mapPosts = () =>
    this.props.posts.map((post, index) => (
      <PostListItem key={index} {...post} />
    ));

  render() {
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    if (!this.props.posts || this.props.posts.length === 0) return <Empty />;
    return <List>{this.mapPosts()}</List>;
  }
}

export default PostList;
