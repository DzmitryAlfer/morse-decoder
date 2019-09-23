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

const MAP_DICTIONARY = {
    '00': '',
    '10': '.',
    '11': '-',
    '**********': ' '
}

function decode(expr) {
    const maxChars = expr.length / 10;
    const arrayOfCharIndexes = [...Array(maxChars).keys()];

    return arrayOfCharIndexes.reduce( (accumulator, currenValue) => {
        const encodedChar = expr.substr(currenValue*10, 10);

        const morseCode = encodedChar.replace(/(\*\*\*\*\*\*\*\*\*\*|00|10|11)/g, (val1) => MAP_DICTIONARY[val1]);

        return accumulator + (morseCode === ' ' ? ' ' : MORSE_TABLE[morseCode]);
    }, '');
}

module.exports = {
    decode
}