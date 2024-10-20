function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    //check is there any empty space after, before, and the current index
    //if there's, then substract the n with 1
    if (n == 0) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    let prev = i === 0 || flowerbed[i - 1] === 0;
    let next = i === flowerbed.length -1 || flowerbed[i + 1] === 0;
    //check whether the current index is 0
    //if the first index is 0, and next one is 0, it can be planted
    //if the prev & next index is 0, it can be planted
    //if the last index and the prev is zero, it can be planted
    if (flowerbed[i] === 0 && prev && next) {
        flowerbed[i] = 1;
        n -= 1;
    }
  }
  return n <= 0;
 };