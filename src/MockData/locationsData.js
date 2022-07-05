import img1 from '../assets/images/Image1.jpg';
import img3 from '../assets/images/Image3.jpg';
import img5 from '../assets/images/Image5.jpg';

const locations = [
  {
    id: 1,
    isDefault: true,
    tittle: 'Australia',
    holidays: [],
    leavePolicies: [],
    users: [
      { name: 'Aleksandr', photo: img1, sex: 'm' },
      { name: 'Bill Senko', photo: null, sex: 'm' },
      { name: 'Pavel', photo: img3, sex: 'm' },
      { name: 'Aleksandr', photo: img1, sex: 'm' },
      {
        name: 'Julia Senko',
        photo: img5,
        sex: 'w',
      },
      { name: 'Helen Mit', photo: null, sex: 'w' },

      { name: 'Pavel', photo: img3, sex: 'm' },
      { name: 'Helen Mit', photo: null, sex: 'w' },

      { name: 'Pavel', photo: null, sex: 'm' },
      { name: 'Homer Mit', photo: null, sex: 'm' },

      { name: 'Pavel', photo: null, sex: 'm' },
      { name: 'Homer Mit', photo: null, sex: 'm' },

      { name: 'Pavel', photo: null, sex: 'm' },
    ],
  },
  {
    id: 2,
    isDefault: false,
    tittle: 'Belarus',
    holidays: [],
    leavePolicies: [],
    users: [
      { name: 'Aleksandr', photo: img1, sex: 'm' },
      { name: 'Bill Senko', photo: null, sex: 'm' },
      { name: 'Pavel', photo: img3 },
      { name: 'Aleksandr', photo: img1 },
      {
        name: 'Him Min',
        photo: null,
      },
    ],
  },
  {
    id: 3,
    isDefault: false,
    tittle: 'USA',
    holidays: [],
    leavePolicies: [],
    users: [
      { name: 'Aleksandr', photo: img1, sex: 'm' },
      { name: 'Bill Senko', photo: null, sex: 'm' },
      { name: 'Pavel', photo: img3, sex: 'm' },
      { name: 'Aleksandr', photo: img1, sex: 'm' },
      {
        name: 'Julia Senko',
        photo: img5,
        sex: 'w',
      },
      { name: 'Helen Mit', photo: null, sex: 'w' },

      { name: 'Pavel', photo: img3, sex: 'm' },
      { name: 'Helen Mit', photo: null, sex: 'w' },

      { name: 'Pavel', photo: null, sex: 'm' },
      { name: 'Homer Mit', photo: null, sex: 'm' },

      { name: 'Pavel', photo: null, sex: 'm' },
      { name: 'Homer Mit', photo: null, sex: 'm' },

      { name: 'Pavel', photo: null, sex: 'm' },
      { name: 'Aleksandr', photo: null },
      { name: 'Bill Senko', photo: null },
      { name: 'Pavel', photo: null },
      { name: 'Aleksandr', photo: null },
      {
        name: 'Julia Senko',
        photo: null,
      },
      { name: 'Aleksandr', photo: null },
    ],
  },
];
export default locations;
