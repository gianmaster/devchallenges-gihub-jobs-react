import env from '../environment';
const byIdApiUrl = (id) => `${env.apiUrl}/${id}.json`;

const findJob = (query) => {
  const queryParams = new URLSearchParams(query).toString();
  const url = `${env.apiUrl}.json?${queryParams}`;
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .catch((err) => {
      throw err;
    });
};

const findJobById = (id) => {
  return fetch(byIdApiUrl(id), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .catch((err) => {
      throw err;
    });
};

export { findJob, findJobById };
