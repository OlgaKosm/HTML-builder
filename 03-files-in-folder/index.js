const path = require('path');
const fs = require('fs');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
        fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
            if (stats.isFile()) {
                const extension = path.extname(file.name);
                const name = path.basename(file.name, extension);
                const size = stats.size;
                console.log(`${name} - ${extension.slice(1)} - ${size/1000}kb`);
            }
        })
    })
})