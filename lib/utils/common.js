const {
    resolve
} = require('path')

const getProjectPath = (projectName) => {
    console.log(process.cwd())
    return resolve(process.cwd(), projectName)
}

module.exports = {
    getProjectPath,
}