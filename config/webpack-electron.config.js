/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-27
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-27
 */
const path = require("path");

module.exports = {
  target: 'electron-main',
  mode: "production",
  entry: path.resolve(__dirname, '../main.js'),
  output: {
    path: path.resolve(__dirname, '../builder'),
    filename: 'main.js'
  },
  node: {
    __dirname: false
  }
};
