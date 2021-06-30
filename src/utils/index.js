// 读取 modules 中 js 后缀的文件
const moduleFiles = require.context('./modules', true, /\.js$/)
// console.log(moduleFiles)
// 将每个文件的导出值组装到 modules 数组中
// 意义：以后导入导出都可以通过这个函数动态读取  不需要手动每个导入导出了
const modules = moduleFiles.keys().reduce((sum, path) => {
    const value = moduleFiles(path).default
    sum[value.name] = value
    return sum
}, {})


export default modules