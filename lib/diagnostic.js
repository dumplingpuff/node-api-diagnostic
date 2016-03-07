// This script should take a plain text file with one number per line, as in
// integers.txt. It should add all the numbers and output the result to the
// console. For example:
//
//    node lib/diagnostic.js integers.txt #=> 15
//
// If there is a line with no number, it should be ignored. However, if there is
// a line with non-number content (for example, "foo"), an error should be
// logged to the console.
//
// You can verify your script is working by running `grunt test`.
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2];

let main = (file) => {
    fs.readFile(file, { encoding: 'utf8' }, (error, content) => {
      if (error) {
        console.log(error);
      }
      let array = content.split('\n');

      for(let i = 0; i < array.length; i++) {
        if(array[i] === "") {
          array[i] = 0;
        }
      }
      console.log(array);
      array.reduce((prev, current) => {
          parseInt(prev);
          console.log(prev);
          if(parseInt(current)) {
            console.error("Sorry there is a line that is not a number.");
          }
          return prev + current;
      });
      console.log(array);
    });
};



main(inFile);

module.exports = main;
