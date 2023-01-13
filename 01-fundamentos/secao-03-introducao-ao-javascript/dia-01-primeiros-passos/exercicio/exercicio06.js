let piece = 'KiNg';
let pieceToLowerCase = piece.toLowerCase();

if (
    pieceToLowerCase === 'pawn' ||
    pieceToLowerCase === 'tower' ||
    pieceToLowerCase === 'horse' ||
    pieceToLowerCase === 'bishop' ||
    pieceToLowerCase === 'king' ||
    pieceToLowerCase === 'queen'
) {
    switch (pieceToLowerCase) {
        case 'pawn': console.log('Forward');
            break;
        case 'tower': console.log('Line');
            break;
        case 'horse': console.log('2x1 L shape');
            break;
        case 'bishop': console.log('Diagonals');
            break;
        case 'king': console.log('All directions, one square at time');
            break;
        case 'queen': console.log('All directions, any number os squares');
            break;
    }
} else {
    console.log('Invalid piece!');
}