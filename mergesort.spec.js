describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
  it('handles an empty array', function() {
    expect(split([])).toEqual([[], []]);
  });
  it('handles a single value', function() {
    expect(split([1])).toEqual([[], [1]]);
  });
  it('handles odd-length-array', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});
describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(
        merge([
          [1, 4, 6],
          [2, 3, 5],
        ])
      ).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('handles an empty array', function() {
    expect(merge([[], []])).toEqual([]);
  });
  it('handles a standard arr', function() {
    expect(
      merge([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Merge Sort function', function() {
  it('', function() {
    // does some fancy stuff recursively
  });
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('can sort an array', function(){
      expect(mergeSort([4,2,1,3,6,5])).toEqual([1,2,3,4,5,6])
  })


});
