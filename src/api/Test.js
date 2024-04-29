import axios from "axios";

export const addChannel = async (data) => {
  try {
    const response = await axios.post("http://localhost:3333/addChannel", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteChannel = async (channelId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3333/deleteChannel/${channelId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateChannel = async (channelId, newData) => {
  try {
    const response = await axios.put(
      `http://localhost:3333/updateChannel/${channelId}`,
      newData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
