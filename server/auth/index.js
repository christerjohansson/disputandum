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

const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');

exports.createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    const token = this.createAuthToken(user);
    res.json({ token });
  })(req, res);
};

exports.jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'unauthorized' });
    req.user = user;
    next();
  })(req, res);
};

exports.postAuth = (req, res, next) => {
  if (req.post.author._id.equals(req.user.id) || req.user.admin) return next();
  res.status(401).end();
};

exports.commentAuth = (req, res, next) => {
  if (
    req.comment.author._id.equals(req.user.id) ||
    req.post.author._id.equals(req.user.id) ||
    req.user.admin
  )
    return next();
  res.status(401).end();
};
