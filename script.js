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
var cardImg = [
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%2520of%2520Nike_Soho_50th_SU22_FL1_6176-p-1600.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180-p-1600.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1698_Copy%2520of%2520Nike_Soho_Play-New-Kids_10-27-21_1950-p-1600.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163d_Copy%2520of%2520DSC04086-p-1600.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%2520of%2520Nike_Soho_AMD21_0781_LORES-p-1600.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp",
  "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170d_AM704059-p-1600.webp",
];
function Featured() {
  let it = document.querySelectorAll(
    ".featured-project .list .item .card-image"
  );
  let cardTop = document.querySelectorAll(".featured-project .list .item");

  if (document.body.clientWidth <= 550) {
    document.getElementById("card-display").style = "display: none";
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
    document.getElementById("card-display").style = "display: block";
    document.querySelector(".design-box").style = "min-height: 100%;";
    for (i of it) {
      i.style = `height: 100% !important; 
    position: fixed !important`;

      //   i.querySelector("img").style = `
      // position: absolute !important;
      // width: 300px !important;
      // height: 450px !important;
      // top: 25%;
      // left: 50%;`;
      i.querySelector("img").style = ` display:none`;
    }

    document.getElementById("card-display").innerHTML = cardImg
      .map((e, i) => {
        let ctTotal = cardTop[i].offsetTop - 75;
        return `<div style="display:none">
          <img
            class="m-3 m-sm-0 object-fit-cover rounded-4 position-absolute start-50 z-3 pe-none "
            src="${e}"
            style="top: ${ctTotal}px; width: 300px; height: 400px"
            alt=""
          />
        </div>`;
      })
      .join("");

    let ci = document.querySelectorAll("#card-display div");
    // setTimeout(() => {
    for (c in cardTop) {
      if (c <= 6) {
        cardTop[c].id = c;
        cardTop[c].addEventListener("mouseenter", (e) => {
          ci[e.target.id].style = "display: block";
        });
        cardTop[c].addEventListener("mouseleave", (e) => {
          ci[e.target.id].style = "display: none";
        });
      }
    }
    // }, 2000);
  }
}

/**
 *
 * Design Card
 *
 */
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
