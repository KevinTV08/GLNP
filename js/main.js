let toggleNavStatus = false;

let toggleNav = function() {
  let getMobileNav = document.querySelector('.mobile-nav');
  let getMobileNavUl = document.querySelector('.mobile-nav__items');
  let getMobileNavLinks = document.querySelectorAll('.mobile-nav__item a');

  if (toggleNavStatus === false) {
    getMobileNav.style.height = '250px';
    getMobileNav.style.position = 'fixed';
    getMobileNav.style.zIndex = '1000';
    getMobileNav.style.top = '50px';

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getMobileNav.style.height = '0';
    getMobileNav.style.top = '0';
    getMobileNav.style.position = 'static';
    toggleNavStatus = false;
  }
};

// let toggleMobileNav = function() {
//   let getShopBtn = document.querySelector('.dropdown-btn');
//   let getDropDownItems = document.querySelector('.dropdown-items');
//   let getDropDownItem = document.querySelectorAll('.dropdown-item a');

//   if (toggleNavStatus === false) {
//     getDropDownItems.style.display = 'block';

//     toggleNavStatus = true;
//   } else if (toggleNavStatus === true) {
//     getDropDownItems.style.display = 'none';

//     toggleNavStatus = false;
//   }
// };
