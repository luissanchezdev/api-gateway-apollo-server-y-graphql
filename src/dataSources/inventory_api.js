const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class InventoryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.inventory_api_url;
    }
    async createProduct(inventory) {
        inventory = new Object(JSON.parse(JSON.stringify(inventory)));
        return await this.post('/inventories', inventory);
    }
    async inventoryByName(name) {
        return await this.get(`/inventories/${name}`);
    }
    async inventoryById(name) {
        return await this.get(`/inventories/${id}`);
    }
    async updateInventory(inventory) {
        inventory = new Object(JSON.parse(JSON.stringify()));
        return await this.post('/transactions', transaction);
    }
    async transactionByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
}
module.exports = AccountAPI;