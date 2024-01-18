import axios from "axios";

const baseUrl =
  "http://192.168.8.100/api/CaPeQqc2vC7aIo7VX5xfPKx1n6ZMv-BOmk4RV1VW/lights";

export const fetchLampState = async (lampId) => {
  const response = await axios.get(`${baseUrl}/${lampId}`);
  return response.data.state;
};

export const updateLampState = async (lampId, payload) => {
  await axios.put(`${baseUrl}/${lampId}/state`, payload);
};
