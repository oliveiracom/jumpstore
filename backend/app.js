var app = require('connect')()
var serveStatic = require('serve-static')

// Serve up mock-api folder
app.use('/api', serveStatic('api', {
  'index': false,
  //'setHeaders': setJsonHeaders
  'setHeaders': {
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}))
 
// Set header to force download
function setJsonHeaders (res, path) {
  res.setHeader('Content-type', 'application/json'),
  res.setHeader('Content-Disposition', contentDisposition(path))
}

function setCors (res, path) {
  res.setHeader('Access-Control-Allow-Origin', '*')
}

// Serve up public folder
//app.use('/', serveStatic('public', {'index': ['index.html', 'index.htm']}))

app.listen(8888, function() {
    console.log('Acesse: http://localhost:8888')
});
