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

export const checkMaxLength = (value, len) =>
  value && value.length <= len
    ? undefined
    : `must be less than ${len} characters`;

export const checkMinLength = (value, len) =>
  value && value.length >= len
    ? undefined
    : `must be more than ${len} characters`;

export const checkValidChars = value =>
  /^[a-zA-Z0-9_-]+$/.test(value) ? undefined : 'contains invalid characters';

export const checkIfTrimmed = value =>
  value.trim() === value ? undefined : 'cannot start or end with whitespace';

export const validUrl = value => {
  try {
    new URL(value);
    return undefined;
  } catch (error) {
    return 'must be a valid url';
  }
};

const max = len => value => checkMaxLength(value, len);
const min = len => value => checkMinLength(value, len);
const validChars = value => checkValidChars(value);
const trimmed = value => checkIfTrimmed(value);

export const required = value => (value ? undefined : 'required');
export const postType = value =>
  value === 'link' || value === 'text'
    ? undefined
    : 'must be link or text post';
export const usernameValidator = [required, max(32), validChars, trimmed];
export const passwordValidator = [required, min(8), max(72)];
export const titleValidator = value =>
  required(value) || checkMaxLength(value, 100);
export const textPostValidator = value =>
  required(value) || checkMinLength(value, 4);
export const urlValidator = value => required(value) || validUrl(value);
export const typeValidator = value => required(value) || postType(value);
