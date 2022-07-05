import React, { useEffect } from 'react';
import styled from 'styled-components';
import locationsData from '../../MockData/locationsData';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { loadingCardList } from '../../store/actions/cards';
import { cardListSelector } from '../../store/selectors/cardsList';
import { useContext } from 'react';
import CreateLocation from '../Pop-up/CreateLocation';
import { ModalContext } from '../../HOC/GlobalModalProvider';

const LocationWrapper = styled.div`
  .location-header {
    display: flex;
    & > div {
      margin-left: 0;
    }
  }

  .card-list {
    margin-top: 25px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #1e212a;
    padding-top: 5px;
    margin-bottom: 5px;
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  .create {
    margin-right: 12px;
    margin-top: 10px;
    height: fit-content;
    padding: 12px 24px;
    border-radius: 6px;
    background-color: #00a0ec;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: white;
    &:hover {
      border-color: #40a9ff;
    }
  }
`;
const Locations = () => {
  const dispatch = useDispatch();
  const cardList = useSelector(cardListSelector);
  const openModal = useContext(ModalContext);

  const showCreateModal = () => {
    openModal(<CreateLocation setModal={openModal} />);
  };

  useEffect(() => {
    dispatch(loadingCardList(locationsData));
  }, []);

  return (
    <LocationWrapper>
      <div className="location-header">
        <div>
          <h2 className={'title'}>Locations</h2>
          <p className={'description'}>
            Create new users or update the existng users. You can then set their
            permissons here too.
          </p>
        </div>
        <button className="create" onClick={() => showCreateModal()}>
          Create Location
        </button>
      </div>
      <div className="card-list">
        {cardList.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
    </LocationWrapper>
  );
};

export default Locations;
