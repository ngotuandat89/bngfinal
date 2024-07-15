// JavaScript Document
function toggleSearch() {
    var searchBar = document.querySelector('.search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block'; // Hiển thị thanh tìm kiếm
    } else {
        searchBar.style.display = 'none'; // Ẩn thanh tìm kiếm
    }
}
function togglePersona() {
    var personaInfo = document.querySelector('.persona-info');
    if (personaInfo.style.display === 'none' || personaInfo.style.display === '') {
        personaInfo.style.display = 'block'; // Hiển thị popup thông tin cá nhân
    } else {
        personaInfo.style.display = 'none'; // Ẩn popup thông tin cá nhân
    }
}

function login() {
    alert('Bạn đã đăng nhập!');
    // Thực hiện các hành động đăng nhập tại đây
}

function logout() {
    alert('Bạn đã đăng xuất!');
    // Thực hiện các hành động đăng xuất tại đây
}
function toggleShop() {
    var shopInfo = document.querySelector('.shop-info');
    if (shopInfo.style.display === 'none' || shopInfo.style.display === '') {
        shopInfo.style.display = 'block'; // Hiển thị popup trang mua sắm
    } else {
        shopInfo.style.display = 'none'; // Ẩn popup trang mua sắm
    }
}

function closeShop() {
    var shopInfo = document.querySelector('.shop-info');
    shopInfo.style.display = 'none'; // Ẩn popup trang mua sắm
}