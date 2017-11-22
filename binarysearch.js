function shiftedArrSearch(shiftArr, num) {
  let pivot = findPivotPoint(shiftArr)
  if (shiftArr[pivot] < num  && num < shiftArr[shiftArr.length - 1]) {
    return binSearch(shiftArr, pivot + 1, shiftArr.length - 1, num)    
  } else if (num == pivot) {
    return pivot
  } else {
    return binSearch(shiftArr, 0, pivot - 1, num)
  }
}

function findPivotPoint(arr) {
  if (arr[0] < arr[arr.length - 1]) return 0
  let start = 0, end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > arr[mid + 1]) return (mid + 1)
    if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return 0
}
function binSearch(arr, pt1, pt2, target){
  while (pt1 <= pt2) {
    var halfpt = Math.floor((pt1+pt2) / 2) 
    if (target === arr[halfpt]) {
      return halfpt
    } else if (target < arr[halfpt]) {
      pt2 = halfpt - 1
    } else {
      pt1 = halfpt + 1
    }
  }
  return -1
}