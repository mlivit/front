var csv = require('csv');
var fs = require('fs');
csv()
    .from.stream(fs.createReadStream(__dirname + '/21Migration-CMS-Pages_INPUTOW.csv'))
    .to.path(__dirname + '/21Migration-CMS-Pages_INPUTOW.csv.out')
    .transform(function(row) {
        row.unshift(row.pop());
        return row;
    })
    .on('record', function(row, index) {
        console.log('#' + index + ' ' + JSON.stringify(row));
    })
    .on('end', function(count) {
        console.log('Number of lines: ' + count);
    })
    .on('error', function(error) {
        console.log(error.message);
    });