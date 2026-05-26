function logout() {
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "../login/";
    });
}
logout();


const fullName = document.querySelector(".user-name");
fullName.textContent = currentUser.fullName;


const suppliers = JSON.parse(localStorage.getItem("Suppliers")) || [];
const select = document.getElementById("Supplier-options");
function parseSup(optionList) {

    select.innerHTML = `
        <option value="">
            Chọn nhà cung cấp
        </option>`;
    if (optionList.length === 0) {
        select.innerHTML += `
            <option disabled>
                Không có nhà cung cấp
            </option>
        `;
        return;
    }

    optionList.forEach(option => {
        select.innerHTML += `
            <option value="${option.id}">
                ${option.name}
            </option>
        `;

    });
}
parseSup(suppliers);




const products = JSON.parse(localStorage.getItem("Products")) || [];
let orderProducts = [];

const tableBody = document.getElementById("product-table-body");
const addBtn = document.querySelector(".add-product-btn");
const totalElement = document.getElementById("total-price");
const prodctTb = document.getElementById('product-table-body');

function renderProduct() {
    tableBody.innerHTML = "";
    orderProducts.forEach((product, index) => {
        const totalPrice = product.amounts * product.price;
        //dung onchange de bat su kien khi thay doi du lieu
        tableBody.innerHTML += `
            <tr>
                <td>
                    <select onchange="changeProduct(${index}, this.value)">
                        ${renderProductOptions(product.id)}
                    </select>
                    </td>
                    <td class="product-name">
                        ${product.name}
                    </td>
                    <td>
                        <input type="number" value="${product.amounts}" min="0" onchange="updateAmounts(${index}, this.value)">
                    </td>
                    <td>
                        <input type="number" value="${product.price}" onchange="updatePrice(${index}, this.value)">
                    </td>
                    <td class="total-price">
                        ${totalPrice.toLocaleString()}đ
                    </td>
                    <td>
                    <button class="delete-btn" onclick="deleteProduct(${index})">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });
    updateSummary();
}

function renderProductOptions(selectedId) {
    //option rong = chon san pham 
    // dung map() de duyet tung phan tu trong mang products
    return `
        <option value="">
            Chọn sản phẩm
        </option>
    
        ${products.map(product => `
            <option value="${product.id}" ${product.id == selectedId ? "selected" : ""}>
                ${product.id}
            </option>
        `).join("")}
    `;
    // dung join de khi map xong thi gop mang string lai nham bo dau , trong mang
}

addBtn.addEventListener('click', () => {
    orderProducts.push({
        id: "",
        name: "",
        amounts: 0,
        price: 0
    });
    renderProduct();
})

window.changeProduct = function (index, productId) {

    const selectedProduct = products.find(product => product.id == productId);
    if (!selectedProduct)
        return;
    orderProducts[index].id = selectedProduct.id;
    orderProducts[index].name = selectedProduct.name;
    orderProducts[index].price = selectedProduct.price;

    renderProduct();
}

window.updateAmounts = function (index, value) {

    orderProducts[index].amounts = Number(value);
    renderProduct();
}

window.updatePrice = function (index, value) {

    orderProducts[index].price = Number(value);
    renderProduct();
}

// xoa san pham
window.deleteProduct = function (index) {
    // xoa 1 phan tu tai vi tri index
    orderProducts.splice(index, 1);
    renderProduct();
}

//update tong tien don hang 
function updateSummary() {

    let total = 0;
    orderProducts.forEach(item => {
        total += item.amounts * item.price;
    });
    totalElement.textContent = total.toLocaleString() + "đ";
}


const draftBtn = document.querySelector(".draft-btn");
const confirmBtn = document.querySelector(".confirm-btn");
const iconfirmBtn = document.querySelector(".confirm-btn");
const backToms = document.querySelector(".secondary-btn");

draftBtn.addEventListener('click',()=>{
    //lay gia tri cua bang chung
    const provider = select.value;
    const employee = document.querySelector(".employee").value;
    const dateInput = document.querySelector(".date-input").value;
    const noteInput = document.querySelector(".note-input").value;

    // kiem tra xem co du ko
    if(!provider||!employee||!dateInput){
        alert("vui long nhap day du thong tin");
        return;
    }
    // kiem tra muc dssp
    if(orderProducts.length  == 0){
        alert("vui long chon san pham");
        return;
    }
    

})

backToms.addEventListener('click',()=>{
    window.location.href = "../" ;
})
