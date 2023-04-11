//tASK : 1

// function addingNumber(number) {
//     return function(a) {
//       return a + number;
//     }
//   }
//  const adding = addingNumber(10);
//  console.log(adding(30));
//  console.log(adding(40));




//TASK : 2

// const countings = [5, 6, 7, 8, 9, 10];

// function SearchingNumbers(arr, value) {
//   if (arr.length === 0) {
//     return false;
//   } else if (arr[0] === value) {
//     return true;
//   } else {
//     return SearchingNumbers(arr.slice(1), value);
//   }
// }

// console.log(SearchingNumbers(countings, 2));
// console.log(SearchingNumbers(countings, 6));



//TASK : 3

//    function addingPara() {
//         const textsDiv = document.getElementById('texts');
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = 'This is a new paragraph.';
//         textsDiv.appendChild(newParagraph);
//       }




//TASK : 4


// function addingList() {
//     const myList = document.getElementById('myList');
//     const newListItem = document.createElement('li');
//     newListItem.textContent = 'apples.';
//     myList.appendChild(newListItem);
//   }


//TASK : 5 


// function changeDivColor() {
//     let element = document.getElementById("myElement");
//     let color = "blue";
//     element.style.backgroundColor = color;
//   }
  


//TASK : 6 


// function objectValue() {
//     let key = "Key";
//     let object = { 
//       name: "Osama", 
//       age: 19 
//     };
//     localStorage.setItem(key, JSON.stringify(object));
//   }
  

//TASK : 7 

// function getObject() {
//     let key = "Key";
//     let object = JSON.parse(localStorage.getItem(key));
//     return object;
//   }
  


//TASK : 8


// function save() {
//     let myObject = { 
//       name: "Osama", 
//       age: 19,
//       city: "Karachi"
//     };
    

//     for (let key in myObject) {
//       localStorage.setItem(key, myObject[key]);
//     }
    

//     let retrievedObject = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       let key = localStorage.key(i);
//       retrievedObject[key] = localStorage.getItem(key);
//     }
//     return retrievedObject;
//   }
  