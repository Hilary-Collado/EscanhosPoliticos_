function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `
      color: ${color};
      background: ${background};
      font-size: ${fontSize};
    `;
    
    console.log(message, style);
}


function celebrateStyler(reason) {
    const fontStyle = "color: tomato; font-size: 50px";
  
    if (reason === "birthday") {
      console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
    } else {
    //   console.log(`%c${reason}`, fontStyle);
    console.log(message, style);
    }
 }
  

 // Invoke consoleStyler function
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

// Invoke celebrateStyler function
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message

function styleAndCelebrate() {
  // Invoke consoleStyler with custom styling and message
  consoleStyler('ef7c8e', 'fae8e0', '30px', 'You made it!');

  // Invoke celebrateStyler with the reason "champions"
  celebrateStyler('champions');
}

// Invoke styleAndCelebrate function with the provided arguments
styleAndCelebrate();




// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color}; += background: ${background}; += font-size: ${fontSize};`;
//     console.log(message, style);
// }


// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     }
//     else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     }
//     else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//     // consoleStyler('ef7c8e', 'fae8e0', '30px', 'You made it!');
//     // celebrateStyler('champions');
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
//     styleAndCelebrate('#ef7c8e','#fae8e0','30px','You made it!','champions');

// }

// // Call styleAndCelebrate
// styleAndCelebrate();
// // styleAndCelebrate('#ef7c8e','#fae8e0','30px','You made it!','champions');

// // 'ef7c8e'
// // 'fae8e0'
// // '30px'  
// // 'You made it!'
// // 'champions'
