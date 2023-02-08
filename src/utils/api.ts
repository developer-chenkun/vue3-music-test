import http from './http'

/**
 *查询mv
 *
 * @export
 * @return {*}
 */
export function getMvData() {
	return http('/personalized/mv')
}

/**
 *推荐新歌
 *
 * @export
 * @return {*}
 */
export function getNewSongs() {
	return http.get('/personalized/newsong')
}

/**
 *推荐专属歌单
 *
 * @export
 * @param {{ limited: number }} params
 * @return {*}
 */
export function getSongs(params: { limit: number }) {
	return http.get('/personalized', { params })
}
