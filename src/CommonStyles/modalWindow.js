import { css } from 'styled-components';
import close from 'assets/icons/close.svg';

export const ModalStyle = css`
  .close {
    background-image: url(${close});
    background-repeat: no-repeat;
    background-position: center;
    width: 16px;
    height: 16px;
    margin-top: -44px;
    margin-right: 22px;
  }
  & h4 {
    border-radius: 6px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    padding: 16px 24px;
    margin-left: 0;
    background: #f6f7fb;
  }
  & .container {
    padding: 0 40px;
    text-align: left;
    margin-left: 0;
  }
`;
