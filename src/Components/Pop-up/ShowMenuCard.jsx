import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard, setDefault } from '../../store/actions/cards';
import { useContext } from 'react';
import { ModalContext } from 'HOC/GlobalModalProvider';
import DeleteCard from './DeleteCard';
import styled from 'styled-components';
import pen from '../../assets/cardIcons/pen.svg';
import star from '../../assets/cardIcons/star.svg';
import trash from '../../assets/cardIcons/trash.svg';

const MenuCardWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 150px;
  max-width: 144px;
  height: 112px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #1e212a;
  text-align: left;
  padding: 16px;
  background-color: #fff;
  z-index: 110;
  filter: drop-shadow(2px 2px 15px rgba(0, 44, 175, 0.05));
  &.hidden {
    display: none;
  }
  .menu-item {
    display: flex;
    padding-bottom: 16px;
    & > div {
      margin-left: 0;
    }
    &:last-child {
      padding-bottom: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  .icon {
    width: 14px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 8.5px;
  }
  .pen {
    background-image: url(${pen});
  }
  .star {
    background-image: url(${star});
  }
  .trash {
    background-image: url(${trash});
  }
`;

const ShowMenuCard = (props) => {
  const openModal = useContext(ModalContext);
  const dispatch = useDispatch();

  function setCardDefault() {
    dispatch(setDefault(props.id));
    props.closeMenu();
  }

  function deleteCardItem() {
    dispatch(deleteCard(props.id));
    props.closeMenu();
  }

  const openModalTask = () => {
    openModal(
      <DeleteCard
        delete={deleteCardItem}
        tittle={props.tittle}
        setModal={openModal}
      />
    );
  };
  return (
    <MenuCardWrapper className={props.isShow ? '' : 'hidden'}>
      <ul>
        <li className={'menu-item'}>
          <div className={'icon pen'}></div>
          <div className={'menu-action'}>Edit</div>
        </li>
        <li className={'menu-item'} onClick={() => setCardDefault()}>
          <div className={'icon star'}></div>
          <div className={'menu-action'}>Set as Default</div>
        </li>
        <li className={'menu-item'} onClick={() => openModalTask()}>
          <div className={'icon trash'}></div>
          <div className={'menu-action'}>Delete</div>
        </li>
      </ul>
    </MenuCardWrapper>
  );
};

export default ShowMenuCard;
