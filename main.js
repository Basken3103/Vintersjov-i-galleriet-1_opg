//DOM selector
const accordions = document.querySelectorAll(".accordion")

// console.log(accordions);
accordions.forEach((accordion) => {
  accordion.addEventListener("click", handleClick)

})

//FoldudBox funktionen  
function handleClick(event) {
  const foldudBox = event.target.nextElementSibling

  console.log(event.target);
  console.log(event.target.nextElementSibling);

  if (foldudBox.style.height == "0px" || foldudBox.clientHeight == 0) {
    console.log("Den er foldet ind dude");
    console.log(foldBox.scrollHeight);

    foldudBox.style.height = `${foldudBox.scrollHeight}px`
  } else {
    foldudBox.style.height = `0px`
  }

}
