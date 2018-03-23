var child_process = require('child_process');

child_process.exec('bulk.bat', function(error, stdout, stderr) {
    console.log(stdout);
});