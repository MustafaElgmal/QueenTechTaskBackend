import jwt from "jsonwebtoken";
import fs from 'fs'

export const createToken = (email: string) => {
  const token = jwt.sign({ email }, process.env.SECRETKEY!, {
    expiresIn: "1h",
  });
  return token
};

export const verifyToken = async (authorization: string) => {
  try {
    const { userName } = jwt.verify(authorization, process.env.SECRETKEY!) as {
      userName: string;
    };
    return userName;
  } catch (e) {
    throw e;
  }
};

export const getlinesInFile=(path:string)=>{
  
const fileContent = fs.readFileSync(path, 'utf8');
const lines = fileContent.split(/\r?\n/);

return lines

}
