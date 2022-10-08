import express, { Request, Response } from 'express' 
import fs from 'fs'

const app = express() 

app.get( '', ( req: Request, res: Response ) => { 
  const html = fs.readFileSync('index.html');
  res.writeHead(200);
  res.write(html);
  res.end();
} ) 


app.get( '/test', ( req: Request, res: Response ) => { 
  res.send( 'hello word' ) 
} ) 

app.listen( 3000 )