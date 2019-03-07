//DO NOT EDIT BELOW. THESE ARE CREATED FOR YOU
//DO NOT EDIT BELOW. THESE ARE CREATED FOR YOU
const friendForm = document.getElementById('friend-form');
const currentMonthBirthdayList = document.getElementById('current-friend-list');
const nextMonthBirthdayList = document.getElementById('next-month-friend-list');
const otherMonthFriendList = document.getElementById('other-month-friend-list');
const oldFriendList = document.getElementById('old-friend-list');
const reverseList = document.getElementById('reverse-name-list');
const totalAge = document.getElementById('total-age');
//DO NOT EDIT ABOVE. THESE ARE CREATED FOR YOU
//DO NOT EDIT ABOVE. THESE ARE CREATED FOR YOU


//Create an array called 'friends'. It should start out empty

let friends = [];
friends.forEach((element)=>{
  console.log(element)
});



//Create a class called Friend that has four pieces of data set in it's constructor: name, age, birthMonth, giftIdea

class Friend {
  constructor(name, age, birthMonth, giftIdea){
    this.name = name,
    this.age = age,
    this.birthMonth = birthMonth,
    this.giftIdea = giftIdea
  }
}



//Create a function called listBirthdays that takes in one paramter called newFriend. Inside of the function, push the newFriend param onto the friends array. Invoke the function setData. This function is one we created to clear/set data on the screen and is outside the scope of this project for what you have learned. Using forEach, loop over the friends array. If the item in the array has a birthMonth that is equal to currentMonth, a variable we created for you, invoke createItem (a function we created for you) with that item of the array and the variable currentMonthBirthdayList. We created the currentMonthBirthdayList variable and a few others for you at the top of the file. If the birthMonth equals nextMonth(another variable we created for you), invoke the createItem function with the item of the array and the nextMonthBirthdayList variable. If it doesn't match either of those two conditions, invoke createItem with the item of the array and the 'otherMonthFriendList' variable

let listBirthdays = (newFriend) => {
  friends.push(newFriend);
  setData();
  let findOlderFriends = ()=>{
    let olderFriends = friends.filter((element)=>{return element.age > 65})
    olderFriends.forEach((element)=>{
      createItem(element, oldFriendList);
    })
    return olderFriends;
  }
  findOlderFriends();

  let reverseNames = function(){
    let reversed = friends.map((element)=>{
      return element.name.split('').reverse().join('');
    });
      reversed.forEach((element)=>{
      createItem(element, reverseList);
    });
    return reversed;
  }
  reverseNames();
  
  let totalFriendAge = function(){
    let totalAge = friends.reduce((tot,curr)=>tot+curr,0);
    totalAge.innerText = totalAge;
  }
  friends.forEach((element)=>{
    if (element.birthMonth == currentMonth){
      createItem(element, currentMonthBirthdayList);
    } else if (element.birthMonth == nextMonth){
      createItem(element, nextMonthBirthdayList)
    } else {
      createItem(element, otherMonthFriendList);
    }
  })
  friends.forEach((element)=>{
  console.log(element)
});
}



//Create an eventListener on the 'friendForm' variable created above. eventListeners allows to do something based off, you guessed it, an event like click or submit. In this case, we will be doing 'submit'. Create a callback function that has evt passed in as a param. inovke evt.preventDefault() to stop the form from trying to redirect (which forms do by default). Now let's create some variables to get data out of our friendForm. First create 'name' which should be equal to evt.target.name.value. Next create 'age' which is equal to evt.target.age.value. Next 'birthMonth' which should equal evt.target.month.value. Finally create 'gift' which should equal evt.target.gift.value. Phew! That was a lot to type out but we aren't quite done yet. Let's now invoke the listBirthdays function we previously created. We want to pass in a new Friend class each time we create a new friend. The friend class expects four values, what do you think they need to be? Okay now finally invoke evt.target.reset(). That is just a quick way to clear out our form after each submission.

friendForm.addEventListener('submit', function(e){
  e.preventDefault();
  let name = e.target.name.value;
  let age = e.target.age.value;
  let birthMonth = e.target.month.value;
  let gift = e.target.gift.value;
  listBirthdays(new Friend(name, age, birthMonth, gift));
  e.target.reset();
})



//Now let's create a function called findOlderFriends. We will be using .filter to filter all of our friends that are older than 65. Call this array olderFriends. With our newly filtered array, use .forEach to run createItem() with the person and oldFriendList variable passed in as arguments. oldFriendList is a variable we created above for you. Add that function to the inside of the listBirthdays function below setData(). This will allow us to run the function each time we add a new friend.

// let findOlderFriends = ()=>{
//   let olderFriends = friends.filter((element)=>{return element.age > 65})
//   olderFriends.forEach((element)=>{
//     createItem(element, oldFriendList);
//   })
// }


//Next up lets create some nick names for our friends by reversing their names. Create a function called 'reverseNames'. Using .map, reverse the name of each friend. Create a reversed variable to hold the new array. With our new array, use .forEach to run createItem() with the person and reverseList passed in as arguments. reverseList was created above for you. Add that function to the inside of the listBirthdays function below findOlderFriends(). This will allow us to run the function each time we add a new friend.

// let reverseNames = function(){
//   let reversed = friends.map((element, i, arr)=>{
//     return element = element.split('').reverse().join('');
//   });
//   reversed.forEach((element)=>{
//     createItem(element, reverseList)
//   });
// }




//Last function we need to create is called 'totalFriendAge'. Use reduce to get a total of your friends age. Set the value to the totalAge variable using totalAge.innerText

let totalFriendAge = function(){
  let totalAge = friends.reduce((tot,curr)=>tot+curr,0);
  totalAge.innerText = totalAge;
}
