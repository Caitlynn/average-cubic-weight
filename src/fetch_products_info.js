
function getCubicWeight(aircon) {
  return aircon.size.width * aircon.size.length
        * aircon.size.height * 0.000001 * 250
}

function getAverageCubicWeight(aircons) {
  const totalCubicWeight = aircons.reduce(
    (accumulator, aircon) => {
      return accumulator + getCubicWeight(aircon);
    },
    0,
  );
  return totalCubicWeight / aircons.length;
}

function getAircons(productList) {
  return productList.filter((product) => product.category === 'Air Conditioners');
}

function fetchAPI() {
  return fetch('http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1')
    .then(function(response) {
      if (response.status !== 200) {
        throw new Error('Get request failed: ' + response.status);
      }
      return response.json()
    });
}

function fetchAverageCubicWeight() {
  return fetchAPI().then((productsResponse) => {
    const aircons = getAircons(productsResponse.objects);
    return getAverageCubicWeight(aircons);
  });
}

export default fetchAverageCubicWeight;
