/**
 * 此页面用于所有请求
 */
import {request} from './reqmethods.js'
import {Api} from './allapi.js'

/**
 * 测试get请求
 */
export const Test = data => request(Api.Test, data, 'get')

/**
 * 测试post请求
 */
export const Test2 = data => request(Api.PostTest, data, 'post')