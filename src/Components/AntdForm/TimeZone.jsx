import React from 'react';

import TimezoneSelect from 'react-timezone-select';

const TimeZone = (props) => {
  return <TimezoneSelect value={props.value} onChange={props.onChange} />;
};

export default TimeZone;
