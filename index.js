var recipes = {
  "foo": "bar"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.assign({}, {key: value})
  return newObject
}
