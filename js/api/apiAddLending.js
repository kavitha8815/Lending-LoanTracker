// apiAddLending.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiAddLending = async (newLending) => {
  try {
    const { data } = await axios.post("/api/lendings", newLending);
    // Mirage returns the created record under "lending"
    return { error: null, data: data.lending };
  } catch (err) {
    return { error: err, data: null };
  }
};
