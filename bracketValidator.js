  function isValid(values) {

var resultArr = [];
    var openersToClosers = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    var openers = new Set(['{', '[', '(']);
    var closers = new Set(['}', ']', ')']);
values.forEach(function(e){
    console.log("****new e******");
    openersStack = [];
    var valArr = e.split('');
    for (var i = 0; i < valArr.length; i++) {
        var char = valArr[i].toString();;
        console.log("char"+char);
        if (openers.has(char)) {
            console.log("in here -->" + char);
            openersStack.push(char);
        } else if (closers.has(char)) {
   
            if (!openersStack.length) {
                break;
            } else {
                 console.log("openersStack.pop();" + openersStack.toString());
                lastUnclosedOpener = openersStack.pop();
                console.log(lastUnclosedOpener);
                if (openersToClosers[lastUnclosedOpener] !== char) {
                    console.log("retuning");
                     break;
                }
            }
        }
 console.log("openersStack -->" + openersStack.length); 
    }
   if(openersStack.length === 0){
         resultArr.push("YES");
    }else{
          resultArr.push("NO");
    } 
    });

    return resultArr;

  }


console.log(isValid(["{}[]()","{[}]"]));

//ES6 method
// let bracketValidator = (input) => {


//     const bracketLookup = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     }
//     const openers = ['(', '{', '['];
//     const closers = [')', '}', ']'];
//     let openerStack = [];
//     for (let item of input) {
//         let itemArr = item.split('');
//         for (let character of itemArr) {
//             if (openers.includes(character)) {
//                 openerStack.push(character);
//             } else if (closers.includes(character)) {
//                 if (!openerStack.length) {
//                     break;
//                 } else {
//                     let lastUnclosedOpener = openerStack.pop();
//                     if (bracketLookup[lastUnclosedOpener] !== character) {
//                         break;
//                     }
//                 }
//             }

//         }
//     }
  
//   if(openerStack.length == 0){
//     return "YES";
//   }
//   else{
//     return "NO";
//   }
// }