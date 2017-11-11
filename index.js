// Write your solution in this file!
let driver={}

function updateDriverWithKeyAndValue (obj, key, value){
  return obj
  return obj.assign({},obj,{ [key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value){
  return obj.assign(obj,{ [key]:value})
}
