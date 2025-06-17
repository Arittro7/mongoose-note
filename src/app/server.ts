import {Server} from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server
const PORT = 5000

async function main(){
  try {
    await mongoose.connect('mongodb+srv://commonDB:commonDB@cluster0.wv413.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=Cluster0')
    server = app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
main()

