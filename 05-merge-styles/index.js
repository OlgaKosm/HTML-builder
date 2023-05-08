const path = require('path');
const fs = require('fs');

const writeableStream = fs.createWriteStream(path.join(__dirname,'project-dist','bundle.css'), {encoding: 'utf-8', flag: {open: 'r+'}})

fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true},(err, files) => {
    files.filter(file => {
        return path.extname(file.name) === '.css'
    }).forEach(fileCss => {
        const readableStream = fs.createReadStream(path.join(__dirname, 'styles', fileCss.name), 'utf-8');
        readableStream.on('data', (data) => {
            writeableStream.write(`${data}\n`)
        })
    })
})