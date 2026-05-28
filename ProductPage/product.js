const createRd = document.querySelector(".create-btn");
createRd.addEventListener('click',()=>{
    window.location.href="../supplier/";
})


const products = JSON.parse(localStorage.getItem("Products")) || [];
const tbody = document.getElementById("product-list")
function renderProducts(productList){
    tbody.innerHTML = "";
    productList.forEach(product => {
        tbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}đ</td>
                <td>${product.stock}</td>
            </tr>
        `;
    });
}
renderProducts(products)