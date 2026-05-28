const createRd = document.querySelector(".create-btn");
createRd.addEventListener('click',()=>{
    window.location.href="../supplier/";
})

const getSup = JSON.parse(localStorage.getItem("Suppliers"));
const tbody = document.getElementById("supplier-list")
function renderProducts(supplierList){
    tbody.innerHTML = "";
    supplierList.forEach(supplier => {
        tbody.innerHTML += `
            <tr>
                <td>${supplier.id}</td>
                <td>${supplier.name}</td>
                <td>${supplier.pn}</td>
                <td>${supplier.address}</td>
            </tr>
        `;
    });
}
renderProducts(getSup)

