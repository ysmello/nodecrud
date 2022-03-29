import jwtService from 'jsonwebtoken';

function jwtMiddleware(req, res, next) {
  const jwt = req.headers['authorization'];
  const replaceJwt = jwt.replace('Bearer ', '');
  const secret = 'secret';

  jwtService.verify(replaceJwt, secret, (err, userInfo) => {
    if (err) {
      res.status(403).send('token not valid');
      return;
    }

    req.userInfo = userInfo;
    next();
  });
}

export default jwtMiddleware;
