const { request } = require("../helpers/http");

const _methods = {
  GET_ISSUE: "getIssue",
  GET_ISSUE_REMOTE_LINKS: "getIssueRemoteLinks",
  GET_REMOTE_APP_OBJECT: "getRemoteApplicationObject",
};

class Tracker {
  constructor() {
    this.token = process.env.PASSPORT_TOKEN;
    this.url = "https://st-api.yandex-team.ru";
  }

  _methodBuilder(
    methodName,
    _id = undefined,
    _origin = undefined,
    _key = undefined
  ) {
    const builder = {};
    switch (methodName) {
      case _methods.GET_ISSUE:
        builder.verbs = "GET";
        builder.url = `${this.url}/v2/issues/${_id}`;
        break;
      case _methods.GET_ISSUE_REMOTE_LINKS:
        builder.verbs = "GET";
        builder.url = `${this.url}/v2/issues/${_id}/remotelinks`;
        break;
      case _methods.GET_REMOTE_APP_OBJECT:
        builder.verbs = "GET";
        builder.url = `${this.url}/v2/applications/${_origin}/objects/${_key}`;
        break;
      default:
        throw new Error("Undefined method name");
    }
    return builder;
  }

  async getIssue(id, searchParams, form = {}) {
    try {
      form.method = this._methodBuilder(_methods.GET_ISSUE, id);
      form.token = this.token;
      return await request({ form }, searchParams);
    } catch (e) {
      throw new Error("Ошибка при выполнении метода getIssue():\n" + e);
    }
  }

  async getIssueRemoteLinks(id, searchParams, form = {}) {
    try {
      form.method = this._methodBuilder(_methods.GET_ISSUE_REMOTE_LINKS, id);
      form.token = this.token;
      return await request({ form }, searchParams);
    } catch (e) {
      throw new Error("Ошибка при выполнении метода getIssue():\n" + e);
    }
  }

  async getRemoteApplicationObject(origin, key, searchParams, form = {}) {
    try {
      form.method = this._methodBuilder(
        _methods.GET_REMOTE_APP_OBJECT,
        undefined,
        origin,
        key
      );
      form.token = this.token;
      return await request({ form }, searchParams);
    } catch (e) {
      throw new Error(
        "Ошибка при выполнении метода getRemoteApplicationObject():\n" + e
      );
    }
  }
}

module.exports = new Tracker();
