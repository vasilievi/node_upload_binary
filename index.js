var express = require('express');
var fs = require('fs');

app = express();

app.post('/upload/:filename', function (req, res) {

  var data = new Buffer.from('');
  req.on('data', function (chunk) {
    data = Buffer.concat([data, chunk]);
  });
  req.on('end', function () {
    fs.writeFile("./files/" + req.params["filename"], data, function (error) {
      if (error) throw error;
      res.send("File recieved: " + req.params["filename"])
    });
  });
});

const port = 80;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
