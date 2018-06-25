import { square } from '../src/maths';

describe('Test Math Square function', () => {
  it('square 1 to be 1', () => {
    expect(square(1)).toBe(1);
  });
  it('square 2 to be 4', () => {
    expect(square(2)).toBe(4);
  });
  it('square -1 to be 1', () => {
    expect(square(-1)).toBe(1);
  });
  it('square null to be 0', () => {
    expect(square(null)).toBe(0);
  });
  it('square \'a\' to be NaN', () => {
    expect(square('a')).toBe(NaN);
  });
  it('square Infinity to be Infinity', () => {
    expect(square(Infinity)).toBe(Infinity);
  });
  it('square -Infinity to be Infinity', () => {
    expect(square(-Infinity)).toBe(Infinity);
  });
});
