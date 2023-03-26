// BEER TABS ================================================

const tabParent = document.querySelector('.tabheader');

const tabs = document.querySelectorAll('.tabheader__item');

const tabContent = document.querySelectorAll('.tabcontent');


function hiddenContent() {
    tabContent.forEach((item) => {
        item.classList.add('hidden');
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
}

function showContent(i = 0) {
    if(tabContent[i].classList.contains('hidden')) {
        tabContent[i].classList.remove('hidden');
        tabContent[i].classList.add('show');
    }

    tabs[i].classList.add("tabheader__item_active");
}

hiddenContent();
showContent();

tabParent.addEventListener('click', (e) => {
    const target = e.target;

    tabs.forEach((item, i) => {
      if (target == item) {
        hiddenContent();
        showContent(i);
      }
    });
});

//=============================================================

// MODAL WINDOW ======================================================

const openModal = document.querySelector(".btn_white");
const modalContacts = document.querySelector(".header__right-modal-container");
const closeModal = document.querySelector("#modal  i");


function hiddenModal() {
    modalContacts.classList.add('hidden');
}

function showModal() {
    if(modalContacts.classList.contains('hidden')) {
        modalContacts.classList.remove('hidden');
        modalContacts.classList.add('show');
    }
}

hiddenModal();


openModal.addEventListener('click', () => {
    showModal();
});

closeModal.addEventListener('click', () => {
    hiddenModal();
});

//=============================================================