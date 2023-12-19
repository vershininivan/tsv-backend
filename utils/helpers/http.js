const got = require("got");

class Http {
  constructor() {}

  async request(parameters = {}, searchParams = {}) {
    const options = {
      url: parameters.form.method.url,
      method: parameters.form.method.verbs,
      headers: {
        Authorization: "OAuth " + parameters.form.token,
      },
      body: JSON.stringify(parameters.form.body),
      searchParams,
      timeout: 5000,
    };
    try {
      const { body } = await got(options);
      return JSON.parse(body);
    } catch (e) {
      throw "Send request error: " + e;
    }
  }
  async requestNoOAuth(parameters = {}, searchParams = {}) {
    const options = {
      url: parameters.form.method.url,
      method: parameters.form.method.verbs,
      headers: {
        Authorization: parameters.form.token,
      },
      body: JSON.stringify(parameters.form.body),
      searchParams,
      timeout: 5000,
    };
    try {
      const { body } = await got(options);
      return JSON.parse(body);
    } catch (e) {
      throw "Send requestNoOAuth error: " + e;
    }
  }
}

module.exports = {Http}
