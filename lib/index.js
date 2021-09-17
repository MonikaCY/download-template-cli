const cmd = require('commander')
const { create, } = require('./order/create')
const { selectFeature } = require('./utils/create')

cmd
    .command('create <name>')
    .description('create new project')
    .action((name) => {
        create(name)

        const a = selectFeature()
        console.log('我选择了', a)
    })

cmd.parse(process.argv)