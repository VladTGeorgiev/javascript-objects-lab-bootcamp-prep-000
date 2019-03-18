var recipes = {
  "foo": "bar"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({keyNew: valueNew}, {key: value})
  return newObject
}
