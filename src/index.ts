import express,{json,urlencoded} from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import userRouter from './routes/user'
import logRouter from './routes/logs'

const app=express()
config()
const port=process.env.PORT||4000
app.use(cors({origin:'*',optionsSuccessStatus:200}))
app.use(morgan("dev"))
app.use(helmet())
app.use(json())
app.use(urlencoded({extended:false}))
app.use('/api/user',userRouter)
app.use('/api/logs',logRouter)

app.listen(port,()=>console.log(`Server is running on port ${port}`))

export default app

