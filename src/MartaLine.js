import React from 'react';
import MartaTrain from './MartaTrain';

/*
Example usage:
<MartaLine lineName="red" trainArray={aBunchOfTrains} />
*/

const MartaLine = (props) => {

  // the lineName is props.lineName
  // Let's filter by the lineName.
  // As we filter, we'll compare to the lower case version
  // of the train's LINE property
  let filteredTrainArray = props.trainArray.filter(train => {
    return train.LINE.toLowerCase() === props.lineName;
  });


  // I can map through my props.trainArray
  // to draw each MartaTrain
  let trainComponents = filteredTrainArray.map(_convertTrainToElement)

  return (
    <div>
      {trainComponents}
    </div>
  );
}

const _convertTrainToElement = (train) => {
  return <MartaTrain train={train} />
}

export default MartaLine;