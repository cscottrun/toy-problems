const sort = require('../solutions/bubbleSort.js')
const expect = require('chai').expect;

console.log(sort)


describe('these tests are for bubble sort', () => {
  let arr1 = [3,4,6,1,2];
  let sorted1 = arr1.sort((a,b) => {return a-b}).toString();
  let arr2 = [3,10,6,12,29];
  let sorted2 = arr2.sort((a,b) => {return a-b}).toString();
  let arr3 = [5,4,6,1,2, 44,66,34,56];
  let sorted3 = arr3.sort((a,b) => {return a-b}).toString();

  it ('should sort array given an array', () => {
    expect(sort.bubble(arr1).toString()).to.be.equal(sorted1);
    expect(sort.bubble(arr2).toString()).to.be.equal(sorted2);
    expect(sort.bubble(arr3).toString()).to.be.equal(sorted3);
  
  })
})