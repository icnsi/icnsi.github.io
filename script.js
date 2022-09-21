let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let condition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const ticTacToe = (element, index) => {
  element.value = currentPlayer;
  element.disabled = true;
  cells[index] = currentPlayer;
  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  result.innerHTML = 'Giliran Pemain ${currentPlayer}';
  
  for(let i=0; i < conditions.length; i++ {
    let condition = conditions[i];
    let a = cells[condition[0]];
    let b = cells[condition[1]];
    let c = cells[condition[2]];
  
 if (a == '' || b == '' || c == '') {
    continue;
  }
      if ((a == b) && (b == c)) {
          result.innerHTML = 'Pemain ${a} Menang!'
          btns.forEach((btn) => btn.disabled = true)
}
}
};

function reset () {
  cells = ['', '', '', '', '', '', '', '', ''];
  btns.forEach ((btn) => {
    btn.value = '';
  });
  currentPlayer = 'X';
  result.innerHTML = 'Giliran Pemain X';
  btns.forEach((btn) => btn.disabled = false);
};
document.querySelector('#reset').addEventListener('Klik', reset);
btns.forEach((btn, i) => {
  btn.addEventListener('Klik', () => ticTacToe(btn, i));
});
  
