class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="row bg-dark bg-gradient p-3 align-items-center">
      <hgroup class="row col-6 align-items-center">
        <h1 class="col-6 col-sm-5 col-md-3">
          <img
            src="./image/E-icon.jpg"
            alt="E-Logo"
            class="img-fluid rounded-circle"
          />
        </h1>
        <p class="text-white h5">Estifanos Taye</p>
      </hgroup>

      <label
        class="row text-white d-md-none justify-content-end mx-2 col-6"
        oninput="doit()"
        ><input type="checkbox" class="d-none" id="menu" />Menu</label
      >

      <ul
        class="text-white list-unstyled p-2 col-md-6 d-none d-md-flex flex-row-reverse justify-content-between"
        id="nav-list"
      >
        <li>
          <a href="./home.html" class="text-info">Home</a>
        </li>
        <li>
          <a href="./profile.html" class="text-info">Profile</a>
        </li>
        <li>
          <a href="./portfolio.html" class="text-info">Portfolio</a>
        </li>
        <li>
          <a href="./scrap_book.html" class="text-info whitespace-nowrap"
            >Scrap Book</a
          >
        </li>
        <li>
          <a href="./contact.html" class="text-info">Contact</a>
        </li>
      </ul>
    </header>
`;
  }
}
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="row bg-dark bg-gradient text-white">
      <section class="col-md-3">
        <h2 class="text-center">Contact me</h2>
        <nav class="d-flex flex-wrap py-3">
          <a
            href="https://t.me/Elgeneral1"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/telegram.png"
              alt="telegram"
              class="rounded-circle img-fluid"
          /></a>
          <a
            href="https://www.linkedin.com/in/estifanos-taye-24b917288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bks55i7scS5yjGwT8NOViUQ%3D%3D"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/linkedin.png"
              alt="linkedin"
              class="rounded-circle img-fluid"
          /></a>
          <a
            href="https://www.lemlemschool.com/"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/lemlem.jpg"
              alt="lemlem"
              class="rounded-circle img-fluid"
          /></a>

          <a
            href="https://github.com/EstifanosTaye320"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/github.png"
              alt="GitHub"
              class="rounded-circle img-fluid"
          /></a>
          <a
            href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1304515570725595342"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/figma.jpg"
              alt="figma"
              class="rounded-circle img-fluid"
          /></a>
          <a
            href="https://discord.com/channels/@me"
            class="w-50 p-2 d-flex justify-content-center"
            ><img
              src="./image/discord.jpg"
              alt="discord"
              class="rounded-circle img-fluid"
          /></a>
        </nav>
      </section>

      <section class="col-md-6 d-flex flex-column">
        <h2 class="text-center">About me</h2>
        <p class="text-justify mx-2">
          My name is Estifanos Taye am a 3rd year Software student at AAiT of
          Addis Abeba University, my hobbies include solving problems on
          programming sites like leetcode, hackerrank, and codeforces....
        </p>
        <a href="./profile.html" class="text-center">Show More >></a>
      </section>

      <section class="col-md-3">
        <h2 class="text-center">My information</h2>
        <div class="d-flex justify-content-center">
          <img src="./image/image-icon.png" alt="Profile picture" class="m-3" />
        </div>
        <ul class="d-flex flex-column align-items-center">
          <li class="mb-1">
            Email:
            <a href="mailto:estifanostaye11@gmail.com"
              >estifanostaye11@gmail.com</a
            >
          </li>
          <li class="mb-1">Phone Number: 0925353945</li>
          <li class="mb-1">ID Number: UGR/7285/14</li>
        </ul>
      </section>
    </footer>
`;
  }
}

class mySelection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section>
        <h2 class="text-center">Means of selection</h2>
        <ul class="row list-unstyled" oninput="meansOfSelection(); sorting()">
          <li class="col-4 d-flex justify-content-center">
            <label
              ><input type="radio" name="select" value="Games" />Games</label
            >
          </li>
          <li class="col-4 d-flex justify-content-center">
            <label><input type="radio" name="select" value="Math" />Math</label>
          </li>
          <li class="col-4 d-flex justify-content-center">
            <label
              ><input
                type="radio"
                name="select"
                value="Physics"
              />Physics</label
            >
          </li>
          <li class="col-4 d-flex justify-content-center">
            <label><input type="radio" name="select" value="Time" />Time</label>
          </li>
          <li class="col-4 d-flex justify-content-center">
            <label
              ><input type="radio" name="select" value="Other" />Other</label
            >
          </li>
          <li class="col-4 d-flex justify-content-center">
            <label
              ><input
                type="radio"
                name="select"
                value="All"
                checked
              />All</label
            >
          </li>
        </ul>
      </section>
    `;
  }
}

function sorting() {
  const workspace = document.getElementById("listing-area");
  const sortPara = document.querySelector("input[name='sort']:checked");
  if (sortPara) {
    let allElements, i, switching, shouldSwitch, sortBy;
    switching = true;
    while (switching) {
      switching = false;
      allElements = workspace.getElementsByClassName("all");
      switch (sortPara.value) {
        case "name":
          sortBy = workspace.getElementsByClassName("titleness");
          break;
        case "favorite":
          sortBy = workspace.getElementsByClassName("favoriteness");
          break;
        case "time":
          sortBy = workspace.getElementsByClassName("dateness");
      }
      for (i = 0; i < allElements.length - 1; i++) {
        shouldSwitch = false;
        if (
          sortBy[i].innerHTML.toLowerCase() >
          sortBy[i + 1].innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        allElements[i].parentNode.insertBefore(
          allElements[i + 1],
          allElements[i]
        );
        switching = true;
      }
    }
  }
}
function meansOfSelection() {
  const workspace = document.getElementById("listing-area");
  const selectPara = document.querySelector("input[name='select']:checked");
  const allElements = workspace.getElementsByClassName("all");
  const selection = (sortBy) => {
    for (ele of allElements) {
      ele.style.display = "none";
    }

    if (sortBy.length === 0) {
      document.getElementById("message").style.display = "block";
    } else {
      document.getElementById("message").style.display = "none";
      for (item of sortBy) {
        item.style.display = "flex";
      }
    }
  };
  switch (selectPara.value) {
    case "Games":
      const games = workspace.getElementsByClassName("game");
      selection(games);
      break;
    case "Math":
      const maths = workspace.getElementsByClassName("math");
      selection(maths);
      break;
    case "Physics":
      const physics = workspace.getElementsByClassName("physics");
      selection(physics);
      break;
    case "Time":
      const times = workspace.getElementsByClassName("time");
      selection(times);
      break;
    case "Other":
      const others = workspace.getElementsByClassName("other");
      selection(others);
      break;
    case "All":
      selection(allElements);
      break;
  }
}
function doit() {
  const menu = document.querySelector("#menu");
  const navList = document.querySelector("#nav-list");

  navList.classList.toggle("d-none");
  navList.classList.toggle("d-flex");
}

document.getElementById("message").style.display = "none";
customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);
customElements.define("my-selection", mySelection);
