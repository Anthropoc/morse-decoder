const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let mors = '';
for ( let i=0; i<expr.length; i+=2){
    if ( expr[i]+ expr[i+1] == '10'){
     if((i+2)%10 === 0 ){
        mors = `${mors}.*`;
      } else {
        mors = `${mors}.`;
      }
    } else if ( expr[i]+ expr[i+1] == '11'){
     if((i+2)%10 === 0 ){
        mors = `${mors}-*`;
      } else {
        mors = `${mors}-`;
      }
    } else if ( expr[i]+ expr[i+1] == '00'){
        mors = mors;
    } else if ( expr[i]+ expr[i+9] == '**'){
      if((i+2)%10 === 0 ){
        mors = `${mors} 1`;
      } else {
        mors = `${mors} *`;
      }
    } 
      
}  let arr = mors.split('*');
     let str = '';
   for( let i=0; i<arr.length; i++){
     if( arr[i] === ' '){
       str = `${str} `;
     } else{
       key = arr[i];
    if (MORSE_TABLE[key] == undefined){
      str = str;
    }else{
      str = `${str}${MORSE_TABLE[key]}`;
    console.log(str);
    }
  }  
   
 } return str;
  
  
  
  
   
   
}

module.exports = {
    decode
}