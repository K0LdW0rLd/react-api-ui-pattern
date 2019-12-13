import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: darkred;
  color: deepskyblue;
  display: flex;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
`;

const Header = () => {
    return(
        <Div>
          <h1>Modal Wireframe</h1>
        </Div>
    )
  }

export default Header
