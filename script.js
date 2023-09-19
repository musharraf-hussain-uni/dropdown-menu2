const profile = document.querySelector('.profile');

const notifications = document.querySelector('.notifications');
const dropdown = document.querySelector('.dropdown__wrapper');


profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})

notifications.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
})


document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isClicked = notifications.contains(event.target);

    if (!isClickInsideDropdown && !isClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    }
});
// document.addEventListener("click", (event) => {
//     const isClickInsideDropdown = dropdown.contains(event.target);
//     const isProfileClicked = profile.contains(event.target);

//     if (!isClickInsideDropdown && !isProfileClicked) {
//         dropdown.classList.add('hide');
//         dropdown.classList.add('dropdown__wrapper--fade-in');
//     }
// });