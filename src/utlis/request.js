import axios from 'axios';

axios.defaults.baseURL = "https://yousif.info/api/";

export const requestAPI = async ({ route, method = 'GET', body, header = 'application/x-www-form-urlencoded' }) => {
  try {
    const response = await axios.request({
      url: `${route}`,
      method,
      data: body,
      headers: {
        'Content-Type': header,
        Authorization: localStorage.token,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 422) {
        const errors = data.errors
          ? Object.values(data.errors).flat().join(', ')
          : null;

        return {
          status: false,
          message: `${data.message || 'Validation failed'}${errors ? ': ' + errors : ''}`,
        };
      }
    }
  }
};
