const introduction = [
  {
    id: 1,
    title: 'Physical Quantity',
    image: 'https://img.icons8.com/ios-glyphs/30/000000/123.png',
  },
  {
    id: 1,
    title: 'Patterns',
    image: 'https://img.icons8.com/ios-filled/50/000000/candy-cane-pattern.png',
  },
  {
    id: 2,
    title: 'Roman Numbers',
    image:
      'https://img.icons8.com/material-outlined/24/000000/font-style-formatting.png',
  },
  {
    id: 3,
    title: 'Counting Sheep',
    image: 'https://img.icons8.com/officel/24/000000/sheep.png',
  },
  {
    id: 4,
    title: 'Large and Small',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    id: 5,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 6,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const payingNumbers = [
  {
    id: 1,
    title: 'Adding Numbers',
    image: 'https://img.icons8.com/color/50/000000/123.png',
  },
  {
    id: 1,
    title: 'Subtracting Numbers',
    image: 'https://img.icons8.com/color/48/000000/minus.png',
  },
  {
    id: 2,
    title: 'Multiplying Numbers',
    image: 'https://img.icons8.com/color/48/000000/math.png',
  },
  {
    id: 3,
    title: 'Divising Numbers',
    image: 'https://img.icons8.com/ios-glyphs/30/000000/divide.png',
  },
  {
    id: 4,
    title: 'Divisibility Rules!',
    image: 'https://img.icons8.com/cute-clipart/64/000000/divide.png',
  },
  {
    id: 5,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 6,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const factors = [
  {
    id: 1,
    title: 'Factors and Multiples',
    image: 'https://img.icons8.com/dusk/64/000000/mu.png',
  },
  {
    id: 1,
    title: 'Play with Numbers',
    image: 'https://img.icons8.com/color/48/000000/numerology-square.png',
  },
  {
    id: 2,
    title: 'Long Jumps',
    image: 'https://img.icons8.com/color/48/000000/trampoline-park.png',
  },
  {
    id: 3,
    title: 'Catch the Prey',
    image: 'https://img.icons8.com/office/16/000000/frisbee.png',
  },

  {
    id: 5,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 6,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const fraction = [
  {
    id: 1,
    title: 'Introduction',
    image: 'https://img.icons8.com/office/16/000000/75-percents.png',
  },
  {
    id: 12,
    title: 'What lies in between',
    image: 'https://img.icons8.com/color/48/000000/transfer-between-users.png',
  },
  {
    id: 2,
    title: 'Comparison of Fractions',
    image: 'https://img.icons8.com/doodle/48/000000/scales.png',
  },
  {
    id: 3,
    title: 'Operations on Fractions',
    image: 'https://img.icons8.com/cotton/64/000000/percentage--v1.png',
  },

  {
    id: 5,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 6,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const decimal = [
  {
    id: 1,
    title: 'Why Decimals',
    image: 'https://img.icons8.com/metro/26/000000/6-c.png',
  },
  {
    id: 15,
    title: 'Deciphering Decimals',
    image: 'https://img.icons8.com/ios-filled/50/000000/candy-cane-pattern.png',
  },
  {
    id: 2,
    title: 'Comparing Decimals',
    image: 'https://img.icons8.com/doodle/48/000000/scales.png',
  },
  {
    id: 3,
    title: 'Converting Methods',
    image: 'https://img.icons8.com/color/48/000000/ac-dc-converter.png',
  },
  {
    id: 5,
    title: 'The Bouncy Decimal Point',
    image: 'https://img.icons8.com/ios-filled/50/000000/candy-cane-pattern.png',
  },
  {
    id: 6,
    title: 'Add and Subtract',
    image: 'https://img.icons8.com/material-two-tone/24/000000/add-link.png',
  },
  {
    id: 6,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 7,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const money = [
  {
    id: 1,
    title: 'The Barter',
    image: 'https://img.icons8.com/office/24/000000/money.png',
  },
  {
    id: 15,
    title: 'Need For Money',
    image: 'https://img.icons8.com/dotty/80/000000/money.png',
  },
  {
    id: 2,
    title: 'Money in Pakistan',
    image: 'https://img.icons8.com/color/48/000000/pakistan.png">',
  },
  {
    id: 3,
    title: 'Fun with Math',
    image: 'https://img.icons8.com/color/48/000000/math.png',
  },

  {
    id: 6,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 7,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const geometry = [
  {
    id: 1,
    title: 'Point to Your Line',
    image: 'https://img.icons8.com/color/48/000000/math.png',
  },
  {
    id: 15,
    title: 'They Are Interesting',
    image: 'https://img.icons8.com/dotty/80/000000/money.png',
  },
  {
    id: 2,
    title: 'Angles',
    image: 'https://img.icons8.com/color/48/000000/transfer-between-users.png',
  },

  {
    id: 6,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 7,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const circle = [
  {
    id: 1,
    title: 'Round and Round',
    image: 'https://img.icons8.com/plasticine/100/000000/unchecked-circle.png',
  },
  {
    id: 15,
    title: 'Parts of Circle',
    image: 'https://img.icons8.com/color/48/000000/transfer-between-users.png',
  },

  {
    id: 6,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 7,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

const dataHandling = [
  {
    id: 1,
    title: 'Data All Around',
    image: 'https://img.icons8.com/dotty/80/000000/unchecked-circle.png',
  },
  {
    id: 15,
    title: 'Bar Graph',
    image: 'https://img.icons8.com/color/48/000000/graph.png',
  },
  {
    id: 2,
    title: 'Picture Graph',
    image: 'https://img.icons8.com/material-two-tone/24/000000/graph.png',
  },

  {
    id: 6,
    title: 'Practice',
    image: 'https://img.icons8.com/color/48/000000/pilates.png',
  },
  {
    id: 7,
    title: 'Tests',
    image: 'https://img.icons8.com/officel/48/000000/test-passed.png',
  },
];

export const Datas = {
  introduction,
  payingNumbers,
  factors,
  fraction,
  decimal,
  money,
  geometry,
  circle,
  dataHandling,
};
