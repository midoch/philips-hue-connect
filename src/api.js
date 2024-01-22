// api.js

import axios from "axios";

const baseUrl =
  "http://192.168.8.100/api/CaPeQqc2vC7aIo7VX5xfPKx1n6ZMv-BOmk4RV1VW";

export const fetchLampState = async (lampId) => {
  try {
    const response = await axios.get(`${baseUrl}/lights/${lampId}`);
    return response.data.state;
  } catch (error) {
    throw error;
  }
};

export const updateLampState = async (lampId, payload) => {
  try {
    await axios.put(`${baseUrl}/lights/${lampId}/state`, payload);
  } catch (error) {
    throw error;
  }
};

export const fetchRooms = async () => {
  try {
    const response = await axios.get(`${baseUrl}/groups`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchLampDetails = async (lampId) => {
  try {
    const response = await axios.get(`${baseUrl}/lights/${lampId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
