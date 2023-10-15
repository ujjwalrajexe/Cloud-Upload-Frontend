import axios from "axios";
const baseURL = "http://localhost:4000/api/v1/upload";
const instance = axios.create({
  baseURL,
});

export const uploadImage = async (data) => {
  try {
    const response = await instance.post("/imageUpload", data);
    return response.data;
  } catch (e) {
    console.log("error in uploding image", e.message);
    throw e;
  }
};

export const uploadVideo = () => {};

export const uploadReducedImage = () => {};
