var readline = require('readline');
var fs = require('fs');

var TK = function (filePath,outfile) {
	var obj = {};
	var rl = readline.createInterface({
		input: fs.createReadStream(filePath),
		output: process.stdout,
		terminal: false
	});

	rl.on('line', function(line){
		var f = line.match(/.(jpg|gif|png|bmp)/g);
		if (!f) {
			var result = line.match(/\[(.{17})/)[1];
			//console.log(result);
			if (!obj[result]) {
				obj[result] = 1;
			} else {
				obj[result] = obj[result] + 1;
			}
		}
	});

	rl.on('close', function(){
		//console.log(obj);
		var o = JSON.stringify(obj, null,2);
		fs.writeFile(outfile,o,function(err){
			if(err) throw err;
		});
	});
};

// TK("access20160402.log",'rs20160402.json');
// TK("access20160409.log",'rs20160409.json');
// TK("access20160416.log",'rs20160416.json');
// TK("access20160423.log",'rs20160423.json');
// TK("access20160430.log",'rs20160430.json');


TK("access.log.20160827",'20160827.json');
TK("access.log.20160903",'20160903.json');
TK("access.log.20160910",'20160910.json');
TK("access.log.20160917",'20160917.json');
TK("access.log.20160924",'20160924.json');
TK("access.log.20161001",'20161001.json');
TK("access.log",'access.json');




