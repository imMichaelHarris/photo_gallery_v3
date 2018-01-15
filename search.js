/*const search = document.querySelector('#searchBox');
const photos = document.querySelectorAll('.photo');
const img = document.querySelectorAll('img');
const alt = document.querySelectorAll('img[alt]');
const userSearch = search.value;

search.addEventListener('keyup', () => {
  for(i=0; photos.length; i++) {
    if(alt == userSearch) {
      img.style.visibility = 'visible';
    } else {
      img.style.visibility = 'hidden';
    }
  }
});
*/
/*const input = document.getElementById('userInput');

const search = () => {
  const ul = document.getElementsByClassName('photos');
  const li = document.getElementsByTagName('li');
  const filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    let imageTitle = li['data-title'];
    if (imageTitle.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

input.addEventListener('keyup', search);
*/
const input = document.getElementById('userInput');
const userInput = input.value.toUpperCase();
const li = document.getElementsByTagName('li');
const image = document.getElementsByTagName('img[alt]');

input.addEventListener('keyup', function() {

   for(let i = 0; i < li.length; i++){
      if(userInput.indexOf(image) > -1 ){
        li[i].style.display = "";
      } else {
        //document.images[i].style.display = "none";
        li[i].style.display = "none";
      }
    }
});
