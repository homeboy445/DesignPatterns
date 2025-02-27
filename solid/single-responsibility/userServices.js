
/**
 * UserServices class will only handle the user data and any action closely related to or on it.
 */
export class UserServices {
  constructor() {
    this.users = [];
    this.plugins = {};
  }

  registerUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  registerPlugin(pluginName, plugin) {
    this.plugins[pluginName] = plugin;
  }

  getPluginByName(pluginName) {
    if (!this.plugins[pluginName]) {
        throw new Error(`Plugin ${pluginName} not found`);
    }
    return this.plugins[pluginName];
  }
}
