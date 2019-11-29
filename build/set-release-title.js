const fs = require('fs');
const lineByLine = require('n-readlines');
const cwd = process.cwd();
const { exec } = require('child_process');

// get the current map desc name
let currLineIndex = 1;
let lineBuf;
let mapDescriptionLineNumber = -1;
let mapDescription = 'DBZ Tribute';

const liner = new lineByLine(`${cwd}/target/Tribute_Reforged.w3x/war3map.wts`);
 
while (lineBuf = liner.next()) {
  let line = lineBuf.toString('ascii');
  if (line.indexOf('STRING 3') === 0) {
    mapDescriptionLineNumber = currLineIndex + 2;
  }

  if (currLineIndex === mapDescriptionLineNumber) {
    mapDescription = line;
    liner.close();
    break;
  }

  currLineIndex++;
}

// set environment variable
exec(`export RELEASE_TITLE="${mapDescription}"`, (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  }
});
//console.log(process.env.RELEASE_TITLE);