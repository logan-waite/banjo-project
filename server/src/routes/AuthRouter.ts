import { Router, Request, Response, NextFunction } from 'express'
import * as debug from 'debug';
import User from '../models/User'
import * as bcrypt from 'bcrypt'
const users: User[] = require('../db.json').users

export class AuthRouter {
  router: Router

  constructor() {
    this.router = Router()
    this.init()
  }

  public login(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const requestedUser = users.find(user => user.email === body.email)
    res.send({
      success: true,
      data: requestedUser
    })
  }

  public createUser(req: Request, res: Response, next: NextFunction) {
    res.send({
      message: 'creating user'
    })
  }

  init() {
    this.router.post('/login', this.login)
    this.router.put('/create', this.login)
  }
}

const authRoutes = new AuthRouter()
authRoutes.init()

export default authRoutes.router
