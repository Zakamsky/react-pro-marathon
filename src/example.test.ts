import toCapitalizeFirstLetter from './example';

describe('toCapitalizeFirstLetter', () => {
  test('должден зваустить функцию с пустой строкой и вернуть пустую строку', () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });

  test('должден зваустить функцию с аргументом "test text line" и вернуть "Test Text Line"', () => {
    expect(toCapitalizeFirstLetter('test text line')).toBe('Test Text Line');
  });

  test('должден зваустить функцию с аргументом "oneWord" и вернуть "OneWord"', () => {
    expect(toCapitalizeFirstLetter('oneWord')).toBe('OneWord');
  });
});
