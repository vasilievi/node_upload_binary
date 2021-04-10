# Upload binary file to NodeJS

Example of uploading using only express and fs in NodeJS.


```Javascript
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
```


