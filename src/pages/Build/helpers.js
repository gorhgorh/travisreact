function checkJson (json) {
  var goodJson
  if (json.id && json.author_name && json.matrix) {
    goodJson = json.matrix
  } else { goodJson = false }
  return goodJson
}

module.exports = checkJson

// export default checkJson
