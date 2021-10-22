import Express  from "express";

const router = Express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the protected routes'
  })
})

export default router