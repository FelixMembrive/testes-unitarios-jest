import axios from "axios";

const get = async (cep: String) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default {
  get,
};
