import qs from 'qs'

import fetch from '@/utils/request'

export const getDomain = () => {
  return ''
}

export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()

  const keys = Object.keys(queryParameters)

  let queryUrl = url

  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }

  if (body) {
    return fetch({
      method: method,
      url: queryUrl,
      data: body,
      config: config
    })
  } else if (method === 'get') {
    return fetch({
      method: method,
      url: queryUrl,
      params: form,
      config: config
    })
  } else {
    return fetch({
      method: method,
      url: queryUrl,
      params: qs.stringify(form),
      config: config
    })
  }
}

/* ==========================================================
 *                   auto generate by template
 ==========================================================*/

