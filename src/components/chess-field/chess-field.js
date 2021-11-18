import { useState } from 'react';
import styled from 'styled-components';
import Square from '../square';

const ChessField = () => {

  const simulateChessTable = (x, y) => {

    let count = 0;
    const chessTable = [];

    const steps = [
      [x+1, y+2], [x+1, y-2],
      [x-1, y+2], [x-1, y-2],
      [x+2, y+1], [x+2, y-1],
      [x-2, y+1], [x-2, y-1]
    ];

    const possibleSteps = 
      steps.filter(([posX, posY]) => posX >= 0 && posX <= 7 && posY >= 0 && posY <= 7);

    const white = <Square />;
    const black = <Square black />;
    const green = <Square green />;
    const active = <Square active />;

    for (let i = 0; i < 8; i++) {

      const row = [];

      for (let j = 0; j < 8; j++) {

        let attr = 
          x === j && y === i ? 'active' :
          possibleSteps.some(([X, Y]) => X === j && Y === i) ? 'green':
          count % 2 !== 0 ? 'black' : 'white';

        switch (attr) {
          case 'active' : row.push(active)
            break;
          case 'green' : row.push(green)
            break;
          case 'black' : row.push(black)
            break;
          case 'white':
          default : row.push(white)
            break;
           
        }
        count ++;
      }
      
      chessTable.push(row);
      count ++;
    }

    return chessTable;
  }
  
  const [table, setTable] = useState(simulateChessTable());

  const handleSquareClick = (e) => {

    const elem = e.target; 

    if (elem.matches('tr > td')) {
      const y = elem.parentElement.rowIndex;
      const x = elem.cellIndex;
      const newTable = simulateChessTable(x, y);
      setTable(newTable);

    }
  }
    
  return (
    <StyledTable>
      <tbody onClick={handleSquareClick}>
        {
          table.map(row => {
            return (
            <tr>
              {
                row.map(elem => elem)
              }
            </tr>
            )
          })
        }   
      </tbody>
    </StyledTable>  
  );
}

const StyledTable = styled.table`
  width: 480px;
  height: 480px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export default ChessField;
