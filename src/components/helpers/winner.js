function winner(board, playerTurn){
  // row
  if(board[0] === board[1] && board[1] === board[2] && board[2] === playerTurn) return playerTurn;
  if(board[3] === board[4] && board[4] === board[5] && board[5] === playerTurn) return playerTurn;
  if(board[6] === board[7] && board[7] === board[8] && board[8] === playerTurn) return playerTurn;

  // column
  if(board[0] === board[3] && board[3] === board[6] && board[6] === playerTurn) return playerTurn;
  if(board[1] === board[4] && board[4] === board[7] && board[7] === playerTurn) return playerTurn;
  if(board[2] === board[5] && board[5] === board[8] && board[8] === playerTurn) return playerTurn;

  // diagonal
  if(board[0] === board[4] && board[4] === board[8] && board[8] === playerTurn) return playerTurn;
  if(board[2] === board[4] && board[4] === board[6] && board[6] === playerTurn) return playerTurn;

  return "";
}

export default winner;