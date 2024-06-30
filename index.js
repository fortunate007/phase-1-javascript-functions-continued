// Define a Function Using Function Declaration
function razzle() {
    console.log("You've been razzled!");
  }
  razzle(); // "You've been razzled!"
  
  // Define Hoisting
  // Function declarations are hoisted, meaning you can call them before they're defined in the code.
  
  // Define Function Expression
  const anonymous = function() {
    console.log("This is an anonymous function.");
  };
  anonymous(); // "This is an anonymous function."
  
  // Define Anonymous Function
  // Shown in the previous example with function expression.
  
  // Define a Function Using a Function Expression
  const razzleExpression = function() {
    console.log("You've been razzled!");
  };
  razzleExpression(); // "You've been razzled!"
  
  // Define an IIFE: Immediately-Invoked Function Expression
  (function() {
    console.log("This is an IIFE.");
  })();
  // Output: "This is an IIFE."
  
  // Define Function-Level Scope
  function outer(greeting, msg = "It's a fine day to learn") {
    return function(name, lang = "Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    };
  }
  outer("Hello")("student", "JavaScript");
  // Output: "Hello, student! It's a fine day to learn JavaScript"
  
  // Define Scope Chain
  // Illustrated in the `outer` function example above.
  
  // Define Closure
  function closureExample(thingToAdd) {
    const base = 3;
    return [
      function() {
        return base + thingToAdd;
      },
      function() {
        return base;
      }
    ];
  }
  const array = closureExample(2);
  console.log(array[0]()); // 5
  console.log(array[1]()); // 3
  
  // Lab Exercises
  // Implementing the functions from the lab exercises:
  
  // 1. saturdayFun Function
  function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("play soccer")); // "This Saturday, I want to play soccer!"
  
  // 2. mondayWork Function
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("write code")); // "This Monday, I will write code."
  
  // 3. wrapAdjective Function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); // "You are !!!a dedicated programmer!!!"
  
  console.log(wrapAdjective("%")("a skilled developer")); // "You are %a skilled developer%!"

