const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.querySelector('#bands');
const bandsFragment = document.createDocumentFragment();


const cleanString = band =>  band.replace(/an |a |the /gi, '').trim();

bands
.slice()
.sort((bandA, bandB) =>  cleanString(bandA) > cleanString(bandB) ? 1 : -1)
.forEach( band  => {
  const item = document.createElement('li');
  item.innerHTML = band;
  bandsFragment.appendChild(item)
});

bandsList.appendChild(bandsFragment);
