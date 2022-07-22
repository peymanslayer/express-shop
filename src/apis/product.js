async function getProduct({pagination:{},}) {
    const response = await axios.get(
      "http://localhost:4000/product/pagination?limit=10&page=1"
    );
    return response.data
  }