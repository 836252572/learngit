//说所有API接口统一管理
import requests from './request.js';

//三级联动接口文档
// /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => {
    return requests({
        url: "/api/product/getBaseCategoryList",
        method: "get"
    })
}