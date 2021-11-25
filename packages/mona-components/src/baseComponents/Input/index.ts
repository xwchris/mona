import React from 'react';
import createComponent from '../../createComponent';
import { BaseProps, EventHandler } from '../base';

export interface InputProps extends BaseProps {
  value?: string;
  type?: 'text' | 'number' | 'digit';
  password?: string;
  placeholder?: string;
  placeholderStyle?: string;
  disabled?: boolean;
  maxLength?: number;
  focus?: boolean;
  cursorSpacing?: number;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  onInput?: EventHandler;
  onFocus?: EventHandler;
  onBlur?: EventHandler;
  onConfirm?: EventHandler;
  adjustPosition?: boolean;
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
}

export const Input: React.ComponentType<InputProps> = createComponent<InputProps>('input')

