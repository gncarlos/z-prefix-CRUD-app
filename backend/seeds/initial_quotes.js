
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {
          id: 1,
          quote: 'You can avoid reality, but you cannot avoid the consequences of avoiding reality.',
          author: 'Ayn Rand',
          user_created: false
        },
        {
          id: 2,
          quote: 'A mathematician is a device for turning coffee into theorems.',
          author: 'Paul Erdos',
          user_created: false
        },
        {
          id: 3,
          quote: `The only difference between me and a madman is that I'm not mad.`,
          author: 'Salvador Dali',
          user_created: false
        },
        {
          id: 4,
          quote: 'If you are going through hell, keep going.',
          author: 'Sir Winston Churchill',
          user_created: false
        },
        {
          id: 5,
          quote: 'Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.',
          author: 'Sheldon Cooper',
          user_created: false
        }
      ]);
    });
};
