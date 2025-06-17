import  express, { Request, Response }  from 'express';
import { User } from '../models/users.model';

export const usersRoute = express.Router()

// create users
usersRoute.post('/create-user', async(req: Request, res: Response) =>{
  const body = req.body

  const user = await User.create(body)

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    user
  })

})

// get users
usersRoute.get('/', async(req: Request, res: Response) =>{
  const users = await User.find()

  res.status(201).json({
    success: true,
    message: "All available users",
    users
  })

})
// get single user
usersRoute.get('/:userId', async(req: Request, res: Response) =>{
  const user = req.params.userId
  
  const searchUser = await User.findById(user)
  res.status(201).json({
    success: true,
    message: "Get the required user",
    searchUser
  })
})
// update user
usersRoute.patch('/:userId', async(req: Request, res:Response) =>{
  const userId = req.params.userId
  const updateUser = req.body

  const user = await User.findByIdAndUpdate(userId, updateUser, {new: true})
  res.status(201).json({
    success: true,
    message: "User Updated Successfully",
    user
  })
})

// deleting user
usersRoute.delete('/:userId', async(req: Request, res: Response)=>{
  const userId = req.params.userId
  
  await User.findByIdAndDelete(userId)
  res.status(201).json({
    success: true,
    message: "User Deleted Successfully"
  })
})
