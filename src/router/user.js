let handleUserRouter = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];

  if (method === 'POST' && path === '/api/user/login') {
    return {
      msg: '测试登录接口'
    }
  }

};

module.exports = handleUserRouter;
