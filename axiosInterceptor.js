import axios from 'axios'

const axiosInterceptor = axios.create({
  baseURL: 'https://digitalwoods.tech/ecom/public/api', // Replace with your API base URL
});

// Request interceptor
axiosInterceptor.interceptors.request.use(
  (config) => {
    // Modify the request config here (e.g., add headers, authentication tokens)
        const accessToken = localStorage.getItem("token");
    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptor.interceptors.response.use(
  (response) => {
    // Modify the response data here (e.g., parse, transform)

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);

export default axiosInterceptor;;