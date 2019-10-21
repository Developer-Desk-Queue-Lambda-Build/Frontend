import axios from 'axios';

export const axiosStudentAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://devdesk-queue.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
      role: 'student'
    }
  });
};
