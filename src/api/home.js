import request from '@/utils/request.js';

export const getData = () => {
    return request({
        url: '/home/getData',
        method: 'GET',
    })
}