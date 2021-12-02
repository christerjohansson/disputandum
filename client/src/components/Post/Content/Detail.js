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
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link } from '../../shared/helpers';
import Author from '../../shared/Author';

const Wrapper = styled.div`
  font-size: 13px;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > * {
    margin-right: 4px;
  }

  & > a {
    ${link};
  }

  & > span {
    color: ${props => props.theme.mutedText};
  }
`;

const PostContentDetail = props => (
  <Wrapper>
    <Link to={`/a/${props.category}/${props.id}`}>
      {props.commentCount} comment{props.commentCount !== 1 ? 's' : null}
    </Link>
    <Link to={`/a/${props.category}`}>/a/{props.category}</Link>
    <span>by</span>
    <Author username={props.author && props.author.username} />
    <span>{moment(props.created).fromNow()}</span>
  </Wrapper>
);

export default PostContentDetail;
