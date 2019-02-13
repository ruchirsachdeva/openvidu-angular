
const express = require('express'), http = require('http'), path = require('path');
const app = express();

const forceSsl = require('force-ssl-heroku');
app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT||4200);






app.use(forceSsl);


// PathLocationStrategy

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname,'/dist/index.html'));
});


console.log('Console listening!');
