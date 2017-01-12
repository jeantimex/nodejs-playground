import fs from 'fs';
import path from 'path';

const file = path.resolve('data', 'sample.json');
fs.readFile(file, 'utf8', (error, response) => {
    if (error) throw error;
    const data = JSON.parse(response);
    console.log(data);
});
