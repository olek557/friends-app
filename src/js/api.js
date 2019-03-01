const getData = url => {
  fetch(url).then(responce => {
    if(responce.ok) {
      return responce.json();
    }
    else {
      throw new Error(responce.statusText);
    }
  })
}

export const fetchPeople = () => {
  getData('https://randomuser.me/api/?results=200').then()
}