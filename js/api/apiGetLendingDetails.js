// apiGetLendings.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetLendingDetails = async (id) => {
  try {
    const { data } = await axios.get(`/api/lendings/${id}`);
    return { error: null, data: data.lending };
  } catch (err) {
    return { error: err, data: null };
  }
};
