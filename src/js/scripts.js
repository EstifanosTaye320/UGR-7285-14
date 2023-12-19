class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="grid bg-slate-800 grid-cols-2 p-3">
      <hgroup class="flex items-center">
        <h1 >
          <img
            src="./image/E-icon.jpg"
            alt="E-Logo"
            class="rounded-full w-28"
          />
        </h1>
        <p class="text-white ml-3 whitespace-nowrap">Estifanos Taye</p>
      </hgroup>

      <label
        class="text-white md:hidden grid justify-end items-center m-2"
        oninput="doit()"
        ><input type="checkbox" class="hidden" id="menu" />Menu</label
      >

      <ul
        class="text-white hidden md:grid grid grid-cols-5 items-center justify-items-center col-span-2 md:col-span-1 p-2"
        id="nav-list"
      >
        <li class="hover:text-green-500 duration-500"><a href="./home.html">Home</a></li>
        <li class="hover:text-green-500 duration-500"><a href="./profile.html">Profile</a></li>
        <li class="hover:text-green-500 duration-500"><a href="./portfolio.html">Portfolio</a></li>
        <li class="hover:text-green-500 duration-500">
          <a href="./scrap_book.html" class="whitespace-nowrap">Scrap Book</a>
        </li>
        <li class="hover:text-green-500 duration-500"><a href="./contact.html">Contact</a></li>
      </ul>
    </header>
`;
  }
}
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="grid md:grid-cols-4 bg-slate-800 text-white gap-2">
      <section class="grid grid-cols-1">
        <h2 class="text-xl font-bold text-center">Contact me</h2>
        <nav class="grid grid-cols-2 justify-items-center p-5">
          <a href="https://t.me/Elgeneral1" class="column is-6 is-6-mobile"
            ><img
              src="./image/telegram.png"
              alt="telegram"
              class="rounded-full w-60"
          /></a>
          <a
            href="https://www.linkedin.com/in/estifanos-taye-24b917288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bks55i7scS5yjGwT8NOViUQ%3D%3D"
            class="column is-6 is-6-mobile"
            ><img
              src="./image/linkedin.png"
              alt="linkedin"
              class="rounded-full w-60"
          /></a>
          <a
            href="https://www.lemlemschool.com/"
            class="column is-6 is-6-mobile"
            ><img
              src="./image/lemlem.jpg"
              alt="lemlem"
              class="rounded-full w-60"
          /></a>

          <a
            href="https://github.com/EstifanosTaye320"
            class="column is-6 is-6-mobile"
            ><img
              src="./image/github.png"
              alt="GitHub"
              class="rounded-full w-60"
          /></a>
          <a
            href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1304515570725595342"
            class="column is-6 is-6-mobile"
            ><img src="./image/figma.jpg" alt="figma" class="rounded-full w-60"
          /></a>
          <a
            href="https://discord.com/channels/@me"
            class="column is-6 is-6-mobile"
            ><img
              src="./image/discord.jpg"
              alt="discord"
              class="rounded-full w-60"
          /></a>
        </nav>
      </section>

      <section class="flex flex-col md:col-span-2">
        <h2 class="text-xl font-bold text-center">About me</h2>
        <p class="text-justify">
          My name is Estifanos Taye am a 3rd year Software student at AAiT of
          Addis Abeba University, my hobbies include solving problems on
          programming sites like leetcode, hackerrank, and codeforces....
        </p>
        <a href="./profile.html" class="text-center">Show More >></a>
      </section>

      <section class="flex flex-col">
        <h2 class="text-xl font-bold text-center">My information</h2>
        <div class="flex justify-center">
          <img src="./image/image-icon.png" alt="Profile picture" class="m-3" />
        </div>
        <ul class="flex flex-col items-center">
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
        <h2 class="text-2xl font-bold text-center">Means of selection</h2>
        <ul
          class="grid grid-cols-3 justify-items-center gap-1"
          oninput="meansOfSelection(); sorting()"
        >
          <li>
            <label
              ><input type="radio" name="select" value="Games" />Games</label
            >
          </li>
          <li>
            <label><input type="radio" name="select" value="Math" />Math</label>
          </li>
          <li>
            <label
              ><input
                type="radio"
                name="select"
                value="Physics"
              />Physics</label
            >
          </li>
          <li>
            <label><input type="radio" name="select" value="Time" />Time</label>
          </li>
          <li>
            <label
              ><input type="radio" name="select" value="Other" />Other</label
            >
          </li>
          <li>
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
        item.style.display = "grid";
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
  if (menu.checked) {
    navList.classList.remove("hidden");
  } else {
    navList.classList.add("hidden");
  }
}

document.getElementById("message").style.display = "none";
customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);
customElements.define("my-selection", mySelection);
