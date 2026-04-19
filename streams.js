const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'BigFile.html'), 'utf-8');
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'CpyBigFile.html'), 'utf-8');

// rs.pipe(ws);

rs.on('data', datachunk => {
    ws.write(datachunk);
})