export function Get(url) {
  return fetch(url).then(res => res.json()).catch(function(error) {
    console.log('There was a problem with the get operation: ' + error.message)
  })
}
