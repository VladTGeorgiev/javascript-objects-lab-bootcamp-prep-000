var recipes = {
  "foo": "bar"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return newObject = object.assign({}, object, {[key]: value})
}
