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
    let decodedString = [];
    let encodedWords = expr.split('**********');
    encodedWords.forEach(word => {
        let decodedWord = [];
        let encodedWord = word.split(/(\d{10})/g).filter(el => {return el != ''});
        debugger
        encodedWord.forEach(letter => {
            // debugger
            let decodedLetter = [];
            let encodedLetter = letter.split(/(\d{2})/g).filter(el => {return el != ''});
            encodedLetter.forEach(point => {
                // debugger
                if (point!=='00') {
                    if (point == '10') {
                        decodedLetter.push('.')
                    };
                    if (point == '11') {
                        decodedLetter.push('-')
                    };
                };
            });
            decodedWord.push(MORSE_TABLE[decodedLetter.join('')]);
        });
        decodedString.push(decodedWord.join(''));
    });
    return decodedString.join(' ');
}

module.exports = {
    decode
}