import express ,{Application, Request, Response} from 'express';
import { notesRoute } from './controllers/notes.controllers';
import { usersRoute } from './controllers/users.controllers';

const app: Application = express()

app.use(express.json());
//if it get any request for notes route it will redirect the req to notesRoute file
app.use('/notes', notesRoute) 
app.use('/users', usersRoute) 

app.get('/', (req: Request, res: Response) =>{ //req & res from express
  res.send('welcome to note app')
})

export default app;