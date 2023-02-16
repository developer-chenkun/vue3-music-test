import http from './http'

/**
 * 推荐banner
 * @param params
 * @returns
 */
export function getBannersData(params: { type: number }) {
	return http.get('/banner', { params })
}

/**
 *查询mv
 *
 * @export
 * @return {*}
 */
export function getMvData() {
	return http.get('/personalized/mv')
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

/**
 *获取歌曲播放地址
 *
 * @export
 * @param {({ id: number; level: 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires' })} params
 * @return {*}
 */
export function getMusicUrl(params: { id: number; level: 'standard' | 'higher' | 'exhigh' | 'lossless' | 'hires' }) {
	return http.get('/song/url/v1', { params })
}
