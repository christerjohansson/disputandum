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

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://${window.location.hostname}/api`;

const methods = {
  get: async function (endpoint, token = null) {
    const options = {
      method: 'GET',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` })
      }
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) throw Error(json.message);

    return json;
  },

  post: async function (endpoint, body, token = null) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      },
      body: JSON.stringify(body)
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 422) {
        json.errors.forEach(error => {
          throw Error(`${error.param} ${error.msg}`);
        });
      }

      throw Error(json.message);
    }

    return json;
  },

  delete: async function (endpoint, token = null) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      }
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 401) throw Error('unauthorized');
      throw Error(json.message);
    }

    return json;
  }
};

export async function login (username, password) {
  const json = await methods.post('login', { username, password });
  return json.token;
}

export async function signup (username, password) {
  const json = await methods.post('register', { username, password });
  return json.token;
}

export async function getPosts (category) {
  return await methods.get(`posts/${category}`);
}

export async function getProfile (username) {
  return await methods.get(`user/${username}`);
}

export async function getPost (id) {
  return await methods.get(`post/${id}`);
}

export async function createPost (body, token) {
  return await methods.post('posts', body, token);
}

export async function deletePost (id, token) {
  return await methods.delete(`post/${id}`, token);
}

export async function createComment (post, comment, token) {
  return await methods.post(`post/${post}`, comment, token);
}

export async function deleteComment (post, comment, token) {
  return await methods.delete(`post/${post}/${comment}`, token);
}

export async function castVote (id, vote, token) {
  const voteTypes = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote'
  };

  const voteType = voteTypes[vote];

  return await methods.get(`post/${id}/${voteType}`, token);
}
