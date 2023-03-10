export class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  request = async function ({ path, type, ...options }) {
    if (type) {
      options.headers = { 'Content-Type': type };
    }

    const response = await fetch(`${this.baseUrl}${path}`, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response;
  };

  tasks = {
    get: (query, params = {}) =>
      this.request({
        path: `/tasks`,
        method: 'GET',
        query: query,
        ...params,
      }),
    getById: (id, query, params = {}) =>
      this.request({
        path: `/tasks/${id}`,
        method: 'GET',
        query: query,
        ...params,
      }),
    post: (data, params = {}) =>
      this.request({
        path: `/tasks`,
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
        ...params,
      }),
    putChanges: (id, data, params = {}) =>
      this.request({
        path: `/tasks/${id}`,
        method: 'PATCH',
        body: JSON.stringify(data),
        type: 'application/json',
        ...params,
      }),
    delete: (id, params = {}) =>
      this.request({
        path: `/tasks/${id}`,
        method: 'DELETE',
        ...params,
      }),
  };
}

// console.log(process.env.API_URL);

export const apiService = new Api('http://localhost:7777');
