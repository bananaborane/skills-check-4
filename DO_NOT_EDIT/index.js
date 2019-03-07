const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const currentMonth = monthNames[new Date().getMonth()];
const nextMonth = monthNames[new Date().getMonth() + 1];
document.getElementById('current-month').innerText = currentMonth;
document.getElementById('next-month').innerText = nextMonth;

function setData() {
	currentMonthBirthdayList.innerHTML = '';
	nextMonthBirthdayList.innerHTML = '';
	otherMonthFriendList.innerHTML = '';
	reverseList.innerHTML = '';
	oldFriendList.innerHTML = '';
}

function createItem(person, list) {
	const item = document.createElement('li');
	if (list !== oldFriendList && list !== reverseList) {
		person.birthMonth === currentMonth || person.birthMonth === nextMonth
			? (item.innerText = `${person.name} will be ${Number(person.age) +
					1} and wants a ${person.giftIdea}`)
			: (item.innerText = `${person.birthMonth}: ${person.name} wants a ${person.giftIdea}`);
	} else if (list === oldFriendList) {
		item.innerText = `${person.name}`;
	} else {
		item.innerText = person;
	}
	list.appendChild(item);
}
