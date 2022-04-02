import request from '@/utils/request';

export function post(params) {
	return request({
		url: '/posts',
		method: 'get',
		params,
	});
}
