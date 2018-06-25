import { square } from './maths';

function foo(x) {
  if (x) {
    return square(x);
  }
  return -1;
}

if (process.env.NODE_ENV !== 'production') {
  console.log('-----');
}

export default {
  foo
};
