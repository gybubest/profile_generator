const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let description1 = '';
let description2 = '';

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  description1 += `${answer} `;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    description1 += `loves ${answer} `;

    rl.question('What do you listen to while doing that? ', (answer) => {
      description1 += `while listening to ${answer}, `;
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        description2 += `for ${answer}, `;
        
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          description2 = `devouring ${answer} ` + description2;
      
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            description2 += `prefers ${answer} over any other sport, `;
        
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              description2 += `and is amazing at ${answer}.`;
              console.log(description1 + description2);

              rl.close();
            });

          });

        });
    
      });
  
    });

  });
  
});