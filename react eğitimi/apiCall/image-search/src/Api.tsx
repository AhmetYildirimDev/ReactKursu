import axios from 'axios'

const SearchImage = async ({value}) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID 14K80hbnP5zRok31jyMsDrzSW7u0NZqEzbzYTOoZFFs'
      },
      params: {
        query: value
      }
    })
    debugger;
    return response.data.results;
  }
  export default SearchImage;