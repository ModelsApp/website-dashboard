import axios from "axios";

class Api {
  api: any = null;
  apiUrl = "https://square-app-dev-api.herokuapp.com/api/";

  constructor() {
    this.api = axios.create({
      baseURL: this.apiUrl,
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" }
    });
  }

  async get(url: string, type = "get") {
    try {
      const { data } = await this.api[type](url);
      return data;
    } catch (e) {
      console.log("request Error");
      return {};
    }
  }

  getCampaigns() {
    return this.get("admin/campaign");
  }
}

const api = new Api();

export default api;
