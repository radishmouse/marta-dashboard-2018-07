import React from 'react';

/*
Example usage:
<MartaTrain train={soulTrain} />
*/

const MartaTrain = ({train}) => {
  return (
    <div className="train-card">
      <p key={train.TRAIN_ID}>
        {train.EVENT_TIME}:
        {train.DESTINATION},
        {train.LINE},
        {train.DIRECTION},
        {train.WAITING_TIME}
      </p>
    </div>
  );
}

export default MartaTrain;