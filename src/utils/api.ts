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

/**
 * 热门歌曲集合
 * @returns
 */
export function getHotMusic() {
	return http.get('/search/hot/detail')
}

/**
 * 获取歌单详情
 * @param id 歌单id
 * @returns
 */
export function fetchMusicListDetail(id: number) {
	return http.get('/playlist/detail', { params: { id } })
}
