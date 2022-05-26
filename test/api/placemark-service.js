import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.placemarkUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async addRoute(id, route) {
    const response = await axios.post(`${this.placemarkUrl}/api/crags/${id}/routes`, route);
    return response.data;
  },

  async getRoute(id) {
    const response = await axios.get(`${this.placemarkUrl}/api/crags/${id}/routes`);
    return response.data;
  },

  async getAllRoutes() {
    const res = await axios.get(`${this.placemarkUrl}/api/routes`);
    return res.data;
  },

  async deleteAllRoutes() {
    const res = await axios.delete(`${this.placemarkUrl}/api/routes`);
    return res.data;
  },

  async getCrag(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/crags/${id}`);
    return res.data;
  },

  async createCrag(newCrag) {
    const response = await axios.post(`${this.placemarkUrl}/api/crags`, newCrag);
    return response.data;
  },

  async deleteAllCrags() {
    const response = await axios.delete(`${this.placemarkUrl}/api/crags`);
    return response.data;
  },

  async deleteCrag(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/crags/${id}`);
    return response;
  },

  async getAllCrags() {
    const res = await axios.get(`${this.placemarkUrl}/api/crags`);
    return res.data;
  },
};