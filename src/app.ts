import express, { Request, Response } from "express";
import { splitString, concatenateStrings, isLeapYear, secretHandshake } from "./logic";

const app = express();
const port = 3000;
app.use(express.json());

// This is starting point
app.get('/',(req: Request, res: Response)=>{
    res.send("Hello , This is Sarthak's assignment of 1st week !")
});

//a) To split the string
app.get("/split/:inputString", (req: Request, res: Response) => {
  const { inputString } = req.params;
  const Result = splitString(inputString);

  res.json({ Result });
});

//b) To concatenate the Strings
app.get("/concatenate/:a/:b", (req: Request, res: Response) => {
  const { a, b } = req.params;
  const revisedString = concatenateStrings(a as string, b as string);

  res.json({ revisedString });
});



//c) To check if given year is leap year or not
app.get('/leap-year/:year', (req: Request, res: Response) => {
    const { year } = req.params;
    const leapYear = isLeapYear(parseInt(year));
   
    res.json({ leapYear });
    
  });

//d) secret handshake 
app.get('/secretCode/:number',(req: Request, res: Response)=>{
        const {number} = req.params;
        const code = secretHandshake(parseInt(number));

        res.json({code});
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
