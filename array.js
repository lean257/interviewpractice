function twoSum(arr, target) {
  let matched = {}
  for (var i = 0; i < arr.length; i++) {
    console.log(matched[arr[i]])
    if (matched[arr[i]] >= 0) {
      return [matched[arr[i]], i]  
    } 
    else {
      matched[target - arr[i]] = i
    }
  }
  return []
}

twoSum([3,3], 6)