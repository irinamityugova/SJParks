import React from 'react';
import styled from 'styled-components';
import ParkLi from './ParkLi';
import ButtonText from './UI/Generic/ButtonText';

const Container = styled.div`
  .innerWrapper {
    padding: 20px;
    overflow-y: scroll;
    height: inherit;
  }
`;

const SelectedPark = props => {
  const selectedPark = props.parks.map(el => (
    <ParkLi
      key={el._id}
      park={el}
      selected={true}
      clicked={() => props.deletePark(el)}
    />
  ));

  return (
    <Container className='selectedContainer'>
      <div className='innerWrapper'>
        <ButtonText onClick={props.deleteAllParks}>Deselect All</ButtonText>
        <div>{selectedPark}</div>
      </div>
    </Container>
  );
};
export default SelectedPark;
