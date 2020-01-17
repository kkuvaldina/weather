import axios from "axios";

const KEY = "34aaa0e555c329549590da7f88d639b3";

export default axios.create({
    baseURL: "https://api.openweathermap.org",
    params: {
        key: `${KEY}`
    }
});