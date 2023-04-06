const dropdown = document.getElementById('dropDown');
const userName = document.getElementById('userName');

userName.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
});

userName.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
});

dropdown.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
});


const dropDownNotifications = document.getElementById('dropDownNotifications');
const notifications = document.getElementById('notifications');

notifications.addEventListener('mouseenter', () => {
    dropDownNotifications.style.display = 'block';
});

notifications.addEventListener('mouseleave', () => {
    dropDownNotifications.style.display = 'none';
});

dropDownNotifications.addEventListener('mouseenter', () => {
    dropDownNotifications.style.display = 'block';
});

dropDownNotifications.addEventListener('mouseleave', () => {
    dropDownNotifications.style.display = 'none';
});



