// apiGetLendings.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetLendings = async () => {
  try {
    const { data } = await axios.get("/api/lendings");
    return { error: null, data: data.lendings };
  } catch (err) {
    return { error: err, data: null };
  }
};
