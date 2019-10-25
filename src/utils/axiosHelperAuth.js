import axios from 'axios';

export const axiosHelperAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://devdesk-queue.herokuapp.com/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
      role: 'helper'
    }
  });
};


//Possible to refactor this so it's one bit of code. 