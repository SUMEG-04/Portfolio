// /src/components/common/ThemedComponent/ThemedComponent.js
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import styled from 'styled-components';
import {Sun,Moon} from 'lucide-react'

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background-color: white;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background-color: yellow;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.mode === 'dark' ? '#2196F3' : '#ccc'};

    &:before {
      transform: translate(32px, -50%);
      background-color: black;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Label>
      <Input checked={theme.mode === 'dark'} type="checkbox" onChange={toggleTheme} />
      <Switch>
        <Sun style={{color:"white",padding:3}}/>
        <Moon style={{color:"#333",padding:3}}/>
      </Switch>
    </Label>
  );
};

export default ThemedComponent;
