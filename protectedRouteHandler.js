import Express  from "express";
import jwt from "jsonwebtoken";

const router = Express.Router();

router.get('/', (req, res) => {
  if (req.headers.auth){
    const token = req.headers.auth
    jwt.verify(token, 'itis', (err, decoded) => {
      if(err ) {
        res.json({
          message: 'Something is wrong with the token'
        })
      }
      const userToken = decoded.name;
      console.info(userToken)
    res.json({
      message: 'Welcome to the protected routes'
      })
    })
  } else {
    res.status(401).json({
      message: 'You are not authorized to view this page'
  })
}

})

export default router