
/**
 *
 * loader
 *
 */
function loader() {
  setTimeout(() => {
    document.getElementsByClassName("loading")[0].style = "height:0 !important";
  }, 6000);
}

/**
 *
 * Featured
 *
 */
function Featured() {
  let it = document.querySelectorAll(
    ".featured-project .list .item .card-image"
  );

  if (document.body.clientWidth <= 550) {
    document.querySelector(".design-box").style = "min-height: 1000px;";
    for (i of it) {
      i.style = `
      height: 500px !important; 
      position: relative !important;`;

      i.querySelector("img").style = `
      position: relative !important;
      width: -webkit-fill-available !important; 
      height: 100% !important;
      top: 0; 
      left: 0;`;
    }
  } else {
    document.querySelector(".design-box").style = "min-height: 100%;";
    for (i of it) {
      i.style = `height: 100% !important; 
    position: fixed !important`;

      i.querySelector("img").style = `
    position: absolute !important;
    width: 300px !important; 
    height: 450px !important;
    top: 25%; 
    left: 50%;`;
    }
  }
}

function DesignCard() {
  var des = ["design", "project", "execution"];
  for (i of document.querySelectorAll(".design-box .card-item")) {
    i.querySelector(".item-text div").addEventListener("click", (e) => {
      let target_click = e.target.id.split("-");
      document.getElementById(des[target_click[1]]).style =
        "opacity: 0 !important; z-index: 1 !important;";
      document.getElementById(`${target_click[0]}`).style =
        "opacity: 1 !important; z-index: 2 !important;";
    });
  }
}

/**
 *
 * Start website
 *
 */
loader();
Featured();
window.onresize = () => Featured();
DesignCard();
