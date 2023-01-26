import express, {Express, Request, Response} from "express";
import dotenv from "dotenv"


const app: Express = express();
dotenv.config();
const port = parseInt(process.env.PORT || "4000",10)

app.get('/', (req: Request, res: Response)=>{
    res.send('<h2>THis is my typecript api</h2>')
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
