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
import { Link } from 'react-router-dom';
import { overflow, link } from '../../shared/helpers';

const Wrapper = styled.div`
  display: flex;

  * {
    ${overflow};

    display: block;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.normalText};
    ${props => props.full && 'white-space: unset'};
  }

  a {
    ${link({ underline: true })};
  }
`;

const renderTitle = props => {
  switch (props.type) {
    case 'link':
      return <a href={props.url}>{props.title}</a>;

    case 'text':
      if (props.full) return <span>{props.title}</span>;
      return <Link to={`/a/${props.category}/${props.id}`}>{props.title}</Link>;

    default:
      break;
  }
};

const PostContentTitle = props => (
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
