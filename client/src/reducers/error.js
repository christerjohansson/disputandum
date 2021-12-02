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

import {
  FETCH_POSTS_ERROR,
  FETCH_POST_ERROR,
  CREATE_POST_ERROR,
  DELETE_POST_ERROR,
  CREATE_COMMENT_ERROR,
  VOTE_ERROR
} from '../actions/posts';
import { LOGIN_ERROR, SIGNUP_ERROR } from '../actions/auth';
import { HIDE_ERROR } from '../actions/error';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_ERROR:
    case FETCH_POST_ERROR:
    case CREATE_POST_ERROR:
    case DELETE_POST_ERROR:
    case CREATE_COMMENT_ERROR:
    case VOTE_ERROR:
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      return action.error;

    case HIDE_ERROR:
      return null;

    default:
      return state;
  }
};
