function root(x, n) {
  // your code goes here
  let left = 0
  let right = Math.max(1,x)
  
  while (left < right) {
    const mid = (left+right)/2

    if (Math.abs(x - Math.pow(mid,n)) < 0.001) return mid
    
    if (Math.pow(mid, n) > x) {
      right = mid
    } else {
      left = mid
    }
  }
}