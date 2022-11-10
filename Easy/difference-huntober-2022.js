//Implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

//arrayDiff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:

//arrayDiff([1,2,2,2,3],[2]) == [1,3]

//arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

//arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

//arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function arrayDiff(a,b){
  // if(a.length === 0 || b.length === 0) { return b }
  // return a.filter(function(x) { return b.indexOf(x) === -1; }); -> One liner CodeWars solution
  let newSet = new Set(b)
  return a.filter(n => !newSet.has(n)) // -> .has() happens in constant time
}

console.log(arrayDiff([1,2,2,2,3],[2]),"[1,3]")
console.log(arrayDiff([3, 4],[3]), "[4]")
