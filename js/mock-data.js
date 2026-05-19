export const Users = [
    { 
        userID: 1,
        Username: "Admin",
        password: "Admin@123",
        profileImg: "",
        fullName: "Phune",
        gender: "Male",
        phoneNumber: "123456789123",
        Role:"Admin"
    },
]

export const Product = [
    {
        productID: 1,
        productName: "Gao",
        unit: "kg",
        price: "16.000",
        Amounts: 1,
        create_At : "2-10-2020",
        create_by : Users.userID,
    }
]

export const image = [
    {
        imgId = 1,
        product = Product.productID,
        image_body = "",
    }
]