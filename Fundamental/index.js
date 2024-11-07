// Deklarasi string
let greeting = "Selamat datang di situs saya!";

// Deklarasi boolean
let isLoggedIn = true;

// Deklarasi number
let userAge = 20;

// Deklarasi array
let favoriteItems = ["Laptop", "Smartphone", "Headphones"];

// Deklarasi object
let userProfile = {
    name: "Nurul Maysaroh",
    age: userAge,
    isMember: isLoggedIn,
    favoriteItems: favoriteItems
};

// Menampilkan data menggunakan console.log
console.log("Greeting Message:", greeting); // String
console.log("User Age:", userAge); // Number
console.log("User Logged In Status:", isLoggedIn); // Boolean
console.log("Favorite Items:", favoriteItems); // Array
console.log("User Profile:", userProfile); // Object

// Menampilkan data dengan alert
alert(greeting);
alert("Umur pengguna: " + userAge);
alert("Status keanggotaan: " + (isLoggedIn ? "Member" : "Bukan Member"));

// Akses dan manipulasi array
console.log("Item favorit pertama pengguna:", favoriteItems[0]);
favoriteItems.push("Tablet");
console.log("Item favorit setelah ditambahkan:", favoriteItems);

// Akses dan manipulasi object
console.log("Nama pengguna:", userProfile.name);
userProfile.isPremiumMember = true; // Menambah properti baru ke object
console.log("User Profile after adding isPremiumMember:", userProfile);
