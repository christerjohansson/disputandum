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
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_ERROR
} from '../actions/posts';

const initialState = { isFetching: false, items: [] };

const updateItems = (post, items) =>
  items.map(i => (i.id === post.id ? post : i));

let items;
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, isFetching: true, post: null, newPost: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, isFetching: false, items: action.posts };
    case FETCH_POSTS_ERROR:
      return { ...state, isFetching: false };

    case FETCH_POST_REQUEST:
      return { ...state, isFetching: true, newPost: null };
    case FETCH_POST_SUCCESS:
      return { ...state, isFetching: false, post: action.post };
    case FETCH_POST_ERROR:
      return { ...state, isFetching: false };

    case CREATE_POST_REQUEST:
      return { ...state, isFetching: true };
    case CREATE_POST_SUCCESS:
      return { ...state, isFetching: false, newPost: action.post };
    case CREATE_POST_ERROR:
      return { ...state, isFetching: false, error: action.error };

    case DELETE_POST_REQUEST:
      return { ...state, isDeleting: true };
    case DELETE_POST_SUCCESS:
      items = state.items.filter(i => i.id !== action.post);
      return { ...state, isDeleting: false, items, post: null };
    case DELETE_POST_ERROR:
      return { ...state, isDeleting: false };

    case CREATE_COMMENT_REQUEST:
      return { ...state, isCommenting: true };
    case CREATE_COMMENT_SUCCESS:
      return { ...state, isCommenting: false, post: action.post };
    case CREATE_COMMENT_ERROR:
      return { ...state, isCommenting: false };

    case DELETE_COMMENT_REQUEST:
      return { ...state, isDeleting: true };
    case DELETE_COMMENT_SUCCESS:
      return { ...state, isDeleting: false, post: action.post };
    case DELETE_COMMENT_ERROR:
      return { ...state, isDeleting: false };

    case VOTE_REQUEST:
      return { ...state, isVoting: true };
    case VOTE_SUCCESS:
      items = updateItems(action.post, state.items);
      return {
        ...state,
        isVoting: false,
        items,
        post: action.post
      };
    case VOTE_ERROR:
      return { ...state, isVoting: false };

    default:
      return state;
  }
};
