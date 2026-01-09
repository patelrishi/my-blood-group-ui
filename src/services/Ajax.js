'use client'
import axios from "axios";

const BASEURL='https://blooddonarbackend.vercel.app'                //'http://localhost:3030'

export class Ajax { 
    static sendGetReq(url){
        return axios.get(BASEURL+url)
    }
    static sendPostReq(url, data){
        return axios.post(BASEURL+url, data) //BASEURL+url,data = http://localhost:3030/+std/candidate , (input data) give to DB
    }
    static sendPutReq(url, data){
        return axios.put(BASEURL + url, data)
    }
    static sendDeleteReq(url,data){
        return axios.delete(BASEURL + url, data)
    }
}