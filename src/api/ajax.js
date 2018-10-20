/*
ajax请求模块
 */
import axios from 'axios'


//外部调用这个ajax函数，直接就得到了想要的数据:response.data

export default function ajax(url,data={},type='GET') {

    //这个promise，最终返回的是response.data。也就是外部调用这个ajax函数，直接就得到了想要的数据
    return new Promise((resolve,reject)=>{

        let promise
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }




        promise.then(response => {
            //成功了，就把response.data返回给请求方
            resolve(response.data)
        }).catch(error => {
            //失败了，就把error返回给请求方
                reject(error)
        })


    })

}