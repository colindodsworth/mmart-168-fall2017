//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

// const name = 'John'

// Creates a list element and appends it to the unordered list in part1
const appendListElement = (message) => {
  // 1. creates an empty 'list item' container:
  const li = document.createElement('li')
  // 2. creates a textNode in the document that contains the variable 'message' that was passed into the function:
  const textNode = document.createTextNode(message)
  // 3. appends the textNode into the empty 'list item' container:
  li.appendChild(textNode)
  // 4. selects the element with id 'part1' & appends the list there:
  document.querySelector('#part1').appendChild(li)
}

let counter = 99
while (counter >= 2) {
    appendListElement('We have to say this ' + counter + ' more times!')
    counter--
}

appendListElement('We have to say this ' + counter + ' more time!')
appendListElement('We dont have to say this anymore.')



//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },
    { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10} ,
    { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },
    { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },
    { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },
    { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 }
]

const printAllNames = (counter) => {
      const img1 = document.createElement('img')
      img1.src = people[counter].pic
      img1.classList.add('avatar')

      const paragraph1 = document.createElement('p')
      const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
      paragraph1.appendChild(text1)

      document.querySelector('#part2').appendChild(img1)
      document.querySelector('#part2').appendChild(paragraph1)
    }

for (let i = 0; people.length; i++) {
printAllNames(i)
}




// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = () => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[0].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[0].name + '! Your score is: ' + people[0].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)

  // Message 2
  const img2 = document.createElement('img')
  img2.src = people[1].pic
  img2.classList.add('avatar')

  const paragraph2 = document.createElement('p')
  const text2 = document.createTextNode('Welcome, ' + people[1].name + '! Your score is: ' + people[1].score)
  paragraph2.appendChild(text2)

  document.querySelector('#part2').appendChild(img2)
  document.querySelector('#part2').appendChild(paragraph2)
}

printNames()
