async function asyncData(){
    const productID = getProductId()

}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const urlId = 'http://localhost:3000/api/products' + `/${id}`