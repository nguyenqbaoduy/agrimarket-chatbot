import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";




const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
})
)
import mysql from 'mysql2/promise';

const prompt = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Baoduy321@',
    database: 'agrimarket'
});

console.log('Connected to MySQL database!');

const apiKey = openai;
(async () => {
  try {
    const response = await openai.complete({
      engine: 'davinci',
      prompt,
      max_tokens: 5,
      n: 1,
      stop: '\n',
    });
    const { data } = response;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();

const userInterface = readline.createInterface({
    input: process.stdin,
    oncut: process.stdout
})

userInterface.prompt();

userInterface.on("line", async input =>{
    const res = await openai
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: input}],
    })
    console.log(res.data.choices[0].message.content)
    userInterface.prompt();
})
