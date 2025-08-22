// apiDeleteLending.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiDeleteLending = async (id) => {
  try {
    const { data } = await axios.delete(`/api/lendings/${id}`);
    return { error: null, data };
  } catch (err) {
    return { error: err, data: null };
  }
};
