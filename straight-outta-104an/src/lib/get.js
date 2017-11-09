export function Get(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(function(error) {
      console.log(
        'There was a problem with the get operation: ' + error.message
      )
    })
}

export function Post(url) {
  var payload = {
    a: 1,
    b: 2
  }
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .catch(function(error) {
      console.log(
        'There was a problem with the get operation: ' + error.message
      )
    })
}
