import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {
  res.render('quiz', {
    title: 'Buzzfeed Quiz',
    step: 1,
    state: {},
    outcome: null
  });
});

// One route handles all choices
router.post('/quiz', (req, res) => {
    const body = req.body || {};

  const state = {
    describe: body.describe || '',
    food: body.food || '',
    child: body.child || '',
  };

let step =1;
if (state.describe && !state.food && !state.child) step = 2;
if (state.describe && state.food && !state.child) step = 3;
if (state.describe && state.food && state.child) step = 4;

let outcome = null;
 if (step === 4) {
    outcome = getOutcome(state);
  }

  res.render('quiz', {
    title: 'Cookie Quiz (describe)',
    step,
    state,
    outcome
  });

  function getOutcome({ describe, food, child }) {
 if (describe === 'warm' && food === 'pizza' && child === 'yes') {
    return {
      heading: 'Your cookie is...',
      text: 'Homemade Chocolate Chip'
    };
  }
if (describe === 'warm' && food === 'sandwich' && child === 'yes') {
    return {
      heading: 'Your cookie is...',
      text: 'Buttercream Sandwich'
    };
  }
  if (describe === 'warm' && food === 'pizza' && child === 'no') {
    return {
      heading: 'Your cookie is...',
      text: 'Homemade Snickerdoodle'
    };
  }
  if (describe === 'warm' && food === 'sandwich' && child === 'no') {
    return {
      heading: 'Your cookie is...',
      text: 'Cream Cheese Filled'
    };
  }
  if (describe === 'cold' && food === 'pizza' && child === 'yes') {
    return {
      heading: 'Your cookie is...',
      text: 'Famous Amos Chocolate Chip'
    };
  }
  if (describe === 'cold' && food === 'pizza' && child === 'no') {
    return {
      heading: 'Your cookie is...',
      text: 'Lotus Biscoff'
    };
  }
  if (describe === 'cold' && food === 'sandwich' && child === 'yes') {
    return {
      heading: 'Your cookie is...',
      text: 'Oreo'
    };
  }
  if (describe === 'cold' && food === 'sandwich' && child === 'no') {
    return {
      heading: 'Your cookie is...',
      text: 'Gluten Free Oreo'
    };
  }
}
});

