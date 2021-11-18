import React from 'react';
import styled from 'styled-components';

import icon from '../../images/black.png';

const Square = (props) => {

  return (
    <StyledSquare 
    {...props}/>
  );
}

const StyledSquare = styled.td`
  width: 59px;
  height: 59px;
  float: left;
  box-sizing: border-box;
  background: ${ ({ active, green, black }) => 
    active ? `url(${icon})` :
    green ? '#a2a2ff' :
    black ? '#484848' : 'white' } ;
  background-size: contain;
  background-repeat: no-repeat;
  border: ${({active}) => active ? '3px solid #a2a2ff' : '3px solid #eeddee'};
  border-radius: 5px;
  &:hover {
    border: 3px solid #a2a2ff;
  }
`;

export default Square;
