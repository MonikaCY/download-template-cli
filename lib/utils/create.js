const { getProjectPath } = require('./common')
const { existsSync } = require('fs')
const { exec, cd } = require('shelljs')
const { prompt } = require('inquirer')

const initProjectDir = (projectName) => {
    let file = getProjectPath(projectName)
    if (existsSync(file)) {
        console.log(`${file} 该文件已存在`)
        process.exit(1)
    } else {
        exec(`mkdir ${projectName}`)
        cd(projectName)
    }
}

const selectFeature = async () => {
    let { feature } = await prompt([{
        type: 'checkbox',
        name: '选择你想要的东西',
        choices: [
            { name: 'vite', value: 'vite', checked: true },
            { name: 'typescript', value: 'typescript' },
            { name: 'babel', value: 'babel' },
        ]
    }])

    return feature
}

module.exports = {
    initProjectDir,
    selectFeature
}