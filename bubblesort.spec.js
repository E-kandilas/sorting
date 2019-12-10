describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough(); // replace existing `window['swap']` method
  });
  

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('can handle a swap', function() {
    const testArray = [8, 1, 4, 5, 6];
    expect(bubbleSort(testArray)).toEqual([1, 4, 5, 6, 8]);
  });
  it('getting to the center of window involves exactly three swaps', function() {
    const testArray = [8, 1, 4, 5, 6];
    window.bubbleSort(testArray);
    expect(window.swap.calls.count()).toEqual(4);
  });
});
