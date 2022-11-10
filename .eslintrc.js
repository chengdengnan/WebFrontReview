/*
  配置Eslint 
    "off"或者0，不启用这个规则
    "warn"或者1，出现问题会有警告
    "error"或者2，出现问题会报错
*/

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint']
}