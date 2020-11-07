import request from '../../utils/request';

export function login(data) {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
}

export function register(data) {
  return request({
    url: '/register',
    method: 'POST',
    data,
  });
}

/**
 *
 * @param { object } data
 * @param { string } data.username
 * @param { string } data.email
 */
export function findBack(data) {
  return request({
    url: '/auth/findBack?email=true',
    method: 'POST',
    data,
  });
}

/**
 *
 * @param { object } data
 * @param { string } data.password
 * @param { string } data.key
 */
export function resetPassword(data) {
  return request({
    url: '/auth/reset?password=true',
    method: 'POST',
    data,
  });
}
