let arr = [2, 3, 4, 5, 6, 2, 4];
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return arr[i];
    }
  }
}
findDuplicate(arr);
