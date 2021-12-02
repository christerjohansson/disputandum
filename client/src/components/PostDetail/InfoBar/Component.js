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
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  margin-top: -1px;
  border: 1px solid ${props => props.theme.border};
  ${props => props.round && 'border-radius: 0 0 2px 2px'};
  padding: 8px;
  background-color: ${props => props.theme.foreground};
  font-size: 13px;
  color: ${props => props.theme.mutedText};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

class PostDetailInfoBar extends React.Component {
  deletePost = () => this.props.attemptDeletePost();

  render() {
    return (
      <Wrapper round={!this.props.token}>
        <span>{this.props.views} views</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{this.props.upvotePercentage}% upvoted</span>
        {this.props.token &&
          (this.props.user.id === this.props.author.id ||
            this.props.user.admin) && (
            <DeleteButton onClick={this.deletePost} />
          )}
      </Wrapper>
    );
  }
}

export default PostDetailInfoBar;
