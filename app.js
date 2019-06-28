const handleBlog = require('./src/router/blog');
const handleUser = require('./src/router/user');
const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json');

  const blogData = handleBlog(req, res);
  const userData = handleUser(req, res);

  if(blogData){
    res.end(JSON.stringify(blogData));
    return
  }

  if(userData){
    res.end(JSON.stringify(userData));
    return
  }

  res.writeHead(404,{'Content-type':'text/plain'});
  res.write('404 Not Found\n');

  res.end();

};

module.exports = serverHandle;
