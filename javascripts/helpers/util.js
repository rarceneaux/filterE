const printToDom = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}

// const makeDiv = (,divId) =>{
//   const divElement = document.createElement('div');
//   divElement.id = '';
// }


export {printToDom};