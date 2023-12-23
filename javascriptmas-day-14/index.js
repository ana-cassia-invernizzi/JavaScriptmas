const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const elfHangoutZone = document.querySelector(".elf-hangout-zone");

btn.addEventListener("click", duplicateElf);

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  if (document.querySelectorAll('.elf').length < 100) {
    const clonedElf = elf.cloneNode(true); 
    elfHangoutZone.appendChild(clonedElf); 
  } else {
    alert("Sorry, the elf hangout is full!");
  }
}

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/

