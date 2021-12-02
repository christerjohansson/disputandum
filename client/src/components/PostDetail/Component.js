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
import LoadingIndicatorBox from '../shared/LoadingIndicator/Box';
import Empty from '../shared/Empty';
import PostDetailPost from './Post';
import PostDetailInfoBarContainer from './InfoBar/Container';
import CommentFormContainer from '../CommentForm/Container';
import PostDetailCommentSection from './CommentSection';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.post !== prevProps.post && this.props.post === null) {
      this.props.history.goBack();
    }
  }

  render() {
    const { post } = this.props;
    if (this.props.isFetching) return <LoadingIndicatorBox />;
    if (!post) return <Empty />;
    return (
      <>
        <PostDetailPost {...post} />
        <PostDetailInfoBarContainer
          id={post.id}
          views={post.views}
          upvotePercentage={post.upvotePercentage}
          author={post.author}
        />
        {this.props.token && <CommentFormContainer id={post.id} />}
        <PostDetailCommentSection comments={post.comments} />
      </>
    );
  }
}

export default PostDetail;
