// Write your solution in this file!
let driver={}

function updateDriverWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue (obj, key, value){
  return Object.assign(obj, {[key]:value});
}

function deleteFromDriverByKey (obj, key, value) {
  const newObj = {...obj}
  newObj[key] = value
  return newObj
}
