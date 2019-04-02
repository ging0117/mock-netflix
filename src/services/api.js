import request from '../utils/request';

//movie api
export async function queryAllMovies() {
  return request('/api/v1/movies');
}
