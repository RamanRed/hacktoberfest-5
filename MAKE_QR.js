import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs';

inquirer
  .prompt([
    {
        message: "Data you want to add",
        name: "URL"
    }    
  ])
  .then((answers) => {
    const url = answers.urL; 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('userdata.png')); 
    console.log(` ${url}`); 
    fs.writeFile("userdata.txt", url, (err) => {
        if (err) throw err; 
        console.log("User data is saved"); 
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
      console.error("An unknown error occurred:", error); 
    }
  });
