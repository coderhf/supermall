import {request} from "./request";

export function getCategory() {
  return request({
    url: '/category'
  })
}


/**
 * 获取分类中得每一个类别得hot商品
 * @param maitKey
 * @returns {AxiosPromise}
 */
export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

/**
 * 获取分类中详情数据
 * @param miniWallkey
 * @param type
 * @returns {AxiosPromise}
 */
export function getCategoryDetails(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

