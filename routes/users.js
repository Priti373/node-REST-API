import { Router } from 'express';

const userRouter = Router();

const users = [
  {
    name: 'John',
    age: 20,
    id: 1
  },
  {
    name: 'Priti',
    age: 21,
    id: 2
  },
  {
    name: 'Shresth',
    age: 23,
    id: 3
  }
];

userRouter.get('/users', (req, res) => {
  res.json(users);
});

userRouter.post('/users', (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);

  users.push({ name, age });

  res.json(users);
});

userRouter.get('/users/:id', (req, res) => {
  const userID = req.params.id
  res.send('hi the user id is' + userID);
});

export default userRouter;
export { userRouter };
