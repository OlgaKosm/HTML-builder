const path = require('path');
const fs = require('fs');
const readline = require('readline');

const writeableStream = fs.createWriteStream(path.join(__dirname, 'color.txt'), 'utf-8');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const { stdin, stdout } = process;


stdout.write('Hello. List your favorite colors. To exit write exit\n');

rl.on('line', (input) => {
    if (input === 'exit') {
        process.exit();
    } else {
        writeableStream.write(`${input}\n`);
    }
});

process.on('exit', () => stdout.write('Your preferences have been taken into account. Thank you!'));