//当前这个模块:API进行统一管理
import requests from "./request";

//发请求:axios发请求返回结果Promise对象
//三级联动接口
///api/product/getBaseCategoryList  get  无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});