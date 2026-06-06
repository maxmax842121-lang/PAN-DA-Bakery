// 1. ຂໍ້ມູນສິນຄ້າທັງໝົດ 20 ລາຍການ
const products = [
    { id: 1, name: "ຄົວຊອງເນີຍສົດ", price: 18000, img: "https://sarahsvegankitchen.com/wp-content/uploads/2024/05/Vegan-Croissants-1.jpg" },
    { id: 2, name: "ທາດໄຂ່ (Egg Tart)", price: 12000, img: "https://images.unsplash.com/photo-1721489620017-aedd0cffb93e?w=400" },
    { id: 3, name: "ຂະໜົມປັງຝຣັ່ງ", price: 15000, img: "https://www.kingarthurbaking.com/sites/default/files/recipe_legacy/8-3-large.jpg" },
    { id: 4, name: "ມາກາຣອງ", price: 45000, img: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400" },
    { id: 5, name: "ເຄັກຊັອກໂກແລັດ", price: 35000, img: "https://images.unsplash.com/photo-1711043484522-ad01c2bd769b?fm=jpg&q=60&w=3000" },
    { id: 6, name: "ໂດນັດ", price: 10000, img: "https://boroughmarket.org.uk/wp-content/uploads/2021/10/Plain-doughnuts-featured.jpg" },
    { id: 7, name: "ມັຟຟິນ", price: 20000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStu_lvhQuOdKcrgA_wuUrw_e13U-zfRxCXvQ&s" },
    { id: 8, name: "ພາຍແອັບເປິ້ນ", price: 28000, img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400" },
    { id: 9, name: "ຄຸກກີ້ເນີຍ", price: 15000, img: "https://images.unsplash.com/photo-1573827196605-0a95831e07f9?fm=jpg&q=60&w=3000" },
    { id: 10, name: "ເຄັກສະຕໍເບີລີ້", price: 38000, img: "https://images.unsplash.com/photo-1641848421644-a1603f016f51?fm=jpg&q=60&w=3000" },
    { id: 11, name: "ບຣາວນີ່", price: 25000, img: "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?fm=jpg&q=60&w=3000" },
    { id: 12, name: "ຂະໜົມປັງກະທຽມ", price: 18000, img: "https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?q=80&w=688" },
    { id: 13, name: "ເຄັກມັດຊະ", price: 35000, img: "https://www.dessertfortwo.com/wp-content/uploads/2022/10/Matcha-Cake-19-720x720.jpg" },
    { id: 14, name: "ແຊນວິດແຮມຊີສ", price: 22000, img: "https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_3840/v1/dxp-images/brands/Recipes/all-recipe-assets/grilled-ham-and-cheese-sandwich/762b25487f294e5e864f56db927e5490_lzan5d?_a=BAVMn6ID0" },
    { id: 15, name: "ຄົວຊອງຊັອກໂກ", price: 22000, img: "https://images.getrecipekit.com/v1608585894_13_vjwdhl.jpg?aspect_ratio=16:9&quality=90&" },
    { id: 16, name: "ໂຣລເຄັກ", price: 28000, img: "https://oishibook.com/wp-content/uploads/2021/10/roll-cake-blog-RECIPE-750_750_2.jpg" },
    { id: 17, name: "ທາດໝາກໄມ້", price: 15000, img: "https://www.texanerin.com/content/uploads/2025/07/fruit-tartlets-1600-image.jpg" },
    { id: 18, name: "ຂະໜົມປັງໂຮວິນ", price: 25000, img: "https://www.girlversusdough.com/wp-content/uploads/2025/09/whole-grain-seeded-bread-soft-crumb.jpg" },
    { id: 19, name: "ຊີສເຄັກ", price: 40000, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
    { id: 20, name: "ເອແຄຣ", price: 12000, img: "https://thescranline.com/wp-content/uploads/2023/01/CHOCOLATE-ECLAIRS-WEB-04.jpg" }
];

let basket = []; // ຕະກ້າເກັບສິນຄ້າ

// 2. ຟັງຊັນສະຫຼັບໜ້າເວັບ (Home, Shop, Promo, Contact)
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a, .nav-item').forEach(a => a.classList.remove('active'));
    
    // ຮອງຮັບ ID ທັງແບບມີ ແລະ ບໍ່ມີ -section ຕໍ່ທ້າຍ
    const pageElement = document.getElementById(id) || document.getElementById(id + '-section');
    const navElement = document.getElementById('nav-' + id);
    
    if(pageElement) pageElement.classList.add('active');
    if(navElement) navElement.classList.add('active');
    window.scrollTo(0,0);
}

// 3. ລະບົບ Auto Slider ໜ້າແລກ
let sIdx = 0;
function startSlide() {
    const slides = document.querySelectorAll('.slide');
    if(slides.length === 0) return;
    slides.forEach(s => s.classList.remove('active'));
    sIdx = (sIdx + 1) % slides.length;
    slides[sIdx].classList.add('active');
    setTimeout(startSlide, 5000);
}
startSlide();

// 4. ຟັງຊັນເປີດ-ປິດ ຕະກ້າສິນຄ້າ Sidebar
function toggleCart() {
    const sidebar = document.getElementById('sidebar') || document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    if(sidebar) sidebar.classList.toggle('active');
    if(overlay) overlay.classList.toggle('active');
}

// 5. ຟັງຊັນແຕ້ມລາຍການສິນຄ້າ 20 ຢ່າງລົງໜ້າເວັບ
function renderProducts() {
    const grid = document.getElementById('product-grid') || document.getElementById('product-list');
    if(!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}">
            <div class="card-body">
                <h3>${p.name}</h3>
                <p class="price">${p.price.toLocaleString()} ກີບ</p>
                <button class="btn-add" onclick="addToCart(${p.id})">ເພີ່ມລົງກະຕ່າ</button>
            </div>
        </div>
    `).join('');
}
renderProducts();

// 6. ຟັງຊັນກົດເພີ່ມສິນຄ້າລົງຕະກ້າ
function addToCart(id) {
    const p = products.find(x => x.id === id);
    if(p) {
        basket.push(p);
        updateCartUI(); // ອັບເດດ UI ຕະກ້າທັນທີ
    }
}

// 7. 🔥 [ຈຸດແກ້ໄຂຫຼັກ] ຟັງຊັນອັບເດດໜ້າຈໍຕະກ້າ (ໃຫ້ສະແດງ xຈຳນວນ)
function updateCartUI() {
    // ອັບເດດຕົວເລກເທິງໄອຄອນຕະກ້າ (ຮອງຮັບທັງສອງຊື່ ID ເກົ່າ-ໃໝ່)
    const countBadge = document.getElementById('count') || document.getElementById('cart-count');
    if(countBadge) countBadge.innerText = basket.length;
    
    // ຄຳນວນຍອດລວມທັງໝົດ
    const total = basket.reduce((s, i) => s + i.price, 0);
    const totalDisplay = document.getElementById('total') || document.getElementById('total-amount');
    if(totalDisplay) totalDisplay.innerText = total.toLocaleString() + " ກີບ";
    
    // ເລີ່ມການຈັດກຸ່ມສິນຄ້າທີ່ຊໍ້າກັນ
    const groupedBasket = {};
    basket.forEach(item => {
        if (groupedBasket[item.id]) {
            groupedBasket[item.id].qty += 1;
        } else {
            groupedBasket[item.id] = { ...item, qty: 1 };
        }
    });

    const finalBasketItems = Object.values(groupedBasket);
    
    // ແຕ້ມ HTML ລາຍການສິນຄ້າໃນຕະກ້າແບບຫຼຸດແຖວ (ສະແດງ xຈຳນວນ)
    const cartList = document.getElementById('cart-list') || document.getElementById('cart-items-list');
    if(cartList) {
        cartList.innerHTML = finalBasketItems.map(i => `
            <div style="display:flex; justify-content:space-between; margin-bottom:12px; align-items: center;">
                <span style="font-size:0.95rem;">${i.name} <b style="color: #c6a664;">x${i.qty}</b></span>
                <span style="font-size:0.95rem;">
                    <span style="margin-right: 10px;">${(i.price * i.qty).toLocaleString()} ກີບ</span>
                    <i class="fa-solid fa-trash" style="color:red; cursor:pointer;" onclick="removeFromBasketById(${i.id})"></i>
                </span>
            </div>
        `).join('');
    }
}

// 8. ຟັງຊັນລົບສິນຄ້າອອກເທື່ອລະ 1 ຊິ້ນ ໂດຍໃຊ້ ID
function removeFromBasketById(id) {
    const idx = basket.findIndex(item => item.id === id);
    if (idx !== -1) {
        basket.splice(idx, 1);
    }
    updateCartUI();
}

// 9. ຟັງຊັນກົດ Check Bill ສົ່ງຄ່າໄປໜ້າໃບບິນ
function checkBill() {
    const name = document.getElementById('custName').value;
    const tel = document.getElementById('custTel').value;
    const loc = document.getElementById('cusLoc').value;
    const totalDisplay = document.getElementById('total') || document.getElementById('total-amount');
    
    if(!name || basket.length === 0) return alert("ກະລຸນາປ້ອນຊື່ ແລະ ເລືອກສິນຄ້າ!");
    
    const orderData = {
        name: name,
        tel: tel || "ບໍ່ລະບຸ",
        loc: loc || "ບໍ່ລະບຸ",
        date: new Date().toLocaleString('lo-LA'),
        items: basket, 
        total: totalDisplay.innerText
    };

    localStorage.setItem('myOrder', JSON.stringify(orderData));

    // ລ້າງຕະກ້າ ແລະ ປິດ Sidebar ຫຼັງສັ່ງຊື້
    basket = [];
    updateCartUI();
    toggleCart();

    window.location.href = 'receipt.html'; 
}
// 11. ຟັງຊັນສຳລັບກົດເປີດ ຫຼື ປິດແຖບເມນູ Dropdown (Hamburger Menu) ເທິງມືຖື
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('show'); // ສະຫຼັບຄລາສ 'show' ເພື່ອສະແດງ/ຊ່ອນເມນູ
    }
}

// 12. ຟັງຊັນພິເສດສຳລັບມືຖື: ເມື່ອກົດເລືອກເມນູແລ້ວ ໃຫ້ປ່ຽນໜ້າ ພ້ອມປິດແຖບ Dropdown ລົງໄປອັດຕະໂນມັດ
function selectPage(pageId) {
    showPage(pageId); // ເອີ້ນໃຊ້ຟັງຊັນປ່ຽນໜ້າເດີມທີ່ມີຢູ່ແລ້ວ
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.remove('show'); // ປິດແຖບ Dropdown ລົງໄປ
    }
}
