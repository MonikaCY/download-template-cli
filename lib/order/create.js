const {
    initProjectDir
} = require('../utils/create')

const create = (projectName) => {
    initProjectDir(projectName)
}

module.exports = {
    create
}