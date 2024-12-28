import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d33c17735c64dad8df8a44c4bae0407",
  },
});
