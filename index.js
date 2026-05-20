const fName = document.querySelector(".user-name");
fName.textContent = currentUser.fullName;

const uRole = document.querySelector(".user-role");
uRole.textContent = currentUser.Role;
console.log(uRole)


const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click",()=>{
    localStorage.removeItem("currentUser");
    window.location.href = "./login/login.html";
});


const createbtn = document.querySelector(".create-btn");
createbtn.addEventListener("click",()=>{
    window.location.href = "./createPage/create.html";
})

const clicktbody = document.getElementById("purchase-order-list");
clicktbody.addEventListener("click",()=>{
    window.location.href = "./detailPage/productdt.html";
})

// //lấy orders 
// const orders = JSON.parse(localStorage.getItem("ImportOrders")) || [];

// // lấy toàn bộ tbody bao gồm đơn
// const tbody = document.getElementById("purchase-order-list");
// function renderOrders(data){
//     tbody.innerHTML = "";
//     data.forEach(order => {
//         tbody.innerHTML += `
//             <tr>

//                 <td>${order.Id}</td>

//                 <td>${order.supplierId}</td>

//                 <td>${order.create_at}</td>

//                 <td>${order.create_by}</td>

//                 <td>
//                     ${order.cost.toLocaleString("vi-VN")}đ
//                 </td>

//                 <td>
//                     <span class="status">
//                         ${order.status}
//                     </span>
//                 </td>

//             </tr>
//         `;
//     });
// }
// //chạy hàm
// renderOrders(orders);