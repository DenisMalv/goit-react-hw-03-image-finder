const KEY = '25247734-434310231cfff4911c33dadc4';

function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(
      new Error(`Ужас нет файлов с тегом ${this.state.queryResponponce}`)
    );
  });
  // .then(({ hits }) => {
  //     this.setState({ queryResponponce: hits, status: 'resolved' });
  //     console.log(this.state);
  // })
  // .catch(error => this.setState({ error, status: 'rejected' }));
}
const smallFetchResponse = data => {
  return data.map(({ id, largeImageURL, webformatURL }) => ({
    largeImageURL,
    id,
    webformatURL,
  }));
};

const api = {
  fetchImages,
  smallFetchResponse,
};

export default api;
