import React from 'react';
import styled from 'styled-components';
import { VARIANTS } from './constant';

const HEIGHT = '36px';
const FONTSIZE = '1em';
const FontFamily = 'Roboto, sans-serif';

const Button = styled.button`
  height: ${HEIGHT};
  cursor: pointer;
  background: ${props => props.variant ? VARIANTS[props.variant].backgroundColor : VARIANTS.standard.backgroundColor };
  font-size: ${FONTSIZE};
  font-family:${FontFamily};
  border-radius: 0.25em;
  color: ${props =>  props.variant ? VARIANTS[props.variant].color : VARIANTS.standard.color};
  border: ${props => props.variant ? VARIANTS[props.variant].borderColor : VARIANTS.standard.borderColor };
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  outline: none;
`;

export default Button;
