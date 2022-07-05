import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import LeaveTypes from './LeaveTypes';
import Locations from './Locations';

const VacationWrapper = styled.div``;

const VacationManager = () => {
  const params = useParams();

  return (
    <VacationWrapper>
      {params.type === 'locations' ? (
        <Locations />
      ) : params.type === 'leave-types' ? (
        <LeaveTypes />
      ) : (
        ''
      )}
    </VacationWrapper>
  );
};

export default VacationManager;
