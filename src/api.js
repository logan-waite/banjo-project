import axios from 'axios'

const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : ''

function isFunction (functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

async function callApi (apiCall, params) {
  if (!isFunction(apiCall)) throw new Error('apiCall is not a function')
  try {
    const response = await apiCall(...params)
    return response.data
  } catch (e) {
    return { errors: e.response.data }
  }
}

function createCalls (base) {
  return {
    get (additionalUrl, params) {
      const url = base + (additionalUrl || '') + '/'
      return callApi(axios.get, [url, { params }])
    },
    post (additionalUrl, body) {
      const url = base + (additionalUrl || '') + '/'
      return callApi(axios.post, [url, body])
    },
    put (url) {
      axios.put(base + url || '')
    },
    delete (additionalUrl, params) {
      const url = base + (additionalUrl || '') + '/'
      return callApi(axios.delete, [url, { params }])
    },
    patch (additionalUrl, body) {
      const url = base + (additionalUrl || '') + '/'
      return callApi(axios.patch, [url, body])
    }
  }
}

export const UserApi = (() => {
  return createCalls(BASE_URL + 'users')
})()

export const HomeApi = (() => {
  return createCalls(BASE_URL + 'homes')
})()
