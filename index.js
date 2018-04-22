let exec = require('child_process').exec;

let arg1 = 'hello',
  arg2 = 'world',
  fileName = 'src/test.py';

exec(`python ${fileName} ${arg1} ${arg2}`, function (err, stdout, stderr) {
  if (err) {
    console.log('stderr: ' + err);
  }
  if (stdout) {
    console.log(stdout);
  }
});
