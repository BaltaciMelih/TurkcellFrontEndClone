const axios = require("axios");

export async function getAllGames() {
  try {
    const { data } = await axios.get("./data.json");
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export default { getAllGames };
