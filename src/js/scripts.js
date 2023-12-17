class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="navbar has-shadow is-black">
      <hgroup class="navbar-brand">
        <h1 class="navbar-item image is-200x200">
          <img src="./image/E-icon.jpg" alt="E-Logo" class="is-rounded" />
        </h1>
        <p class="m-3">Estifanos Taye</p>
        <a class="navbar-burger" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </hgroup>

      <ul class="navbar-menu navbar-end" id="nav-links">
        <li class="navbar-item"><a href="./home.html">Home</a></li>
        <li class="navbar-item"><a href="./profile.html">Profile</a></li>
        <li class="navbar-item"><a href="./portfolio.html">Portfolio</a></li>
        <li class="navbar-item"><a href="./scrap_book.html">Scrap Book</a></li>
        <li class="navbar-item"><a href="./contact.html">Contact</a></li>
      </ul>
    </header>
`;
  }
}
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer columns has-background-black has-text-white mt-4">
      <section class="column is-one-quarter">
        <h2 class="title has-text-centered is-size-4">Contact me</h2>
        <nav class="columns">
          <div class="column image m-3">
            <a href="https://t.me/Elgeneral1"
              ><img
                src="./image/telegram.png"
                alt="telegram"
                class="is-rounded m-3"
            /></a>
            <a
              href="https://www.linkedin.com/in/estifanos-taye-24b917288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bks55i7scS5yjGwT8NOViUQ%3D%3D"
              ><img
                src="./image/linkedin.png"
                alt="linkedin"
                class="m-3 is-rounded"
            /></a>
            <a href="https://www.lemlemschool.com/"
              ><img
                src="./image/lemlem.jpg"
                alt="lemlem"
                class="m-3 is-rounded"
            /></a>
          </div>
          <div class="column image m-3">
            <a href="https://github.com/EstifanosTaye320"
              ><img
                src="./image/github.png"
                alt="GitHub"
                class="m-3 is-rounded"
            /></a>
            <a
              href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1304515570725595342"
              ><img src="./image/figma.jpg" alt="figma" class="m-3 is-rounded"
            /></a>
            <a href="https://discord.com/channels/@me"
              ><img
                src="./image/discord.jpg"
                alt="discord"
                class="m-3 is-rounded"
            /></a>
          </div>
        </nav>
      </section>

      <section class="column is-two-quarter">
        <h2 class="title has-text-centered is-size-4">About me</h2>
        <p>
          My name is Estifanos Taye am a 3rd year Software student at AAiT of
          Addis Abeba University, my hobbies include solving problems on
          programming sites like leetcode, hackerrank, and codeforces....
        </p>
        <a href="./profile.html" class="is-flex is-justify-content-center"
          >Show More >></a
        >
      </section>

      <section class="column is-one-quarter">
        <h2 class="title has-text-centered is-size-4">My information</h2>
        <div class="is-flex is-justify-content-center">
          <img src="./image/image-icon.png" alt="Profile picture" class="m-3" />
        </div>
        <ul class="has-text-centered">
          <li>
            Email:
            <a href="mailto:estifanostaye11@gmail.com"
              >estifanostaye11@gmail.com</a
            >
          </li>
          <li>Phone Number: 0925353945</li>
          <li>ID Number: UGR/7285/14</li>
        </ul>
      </section>
    </footer>
`;
  }
}

customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);

const burgerIcon = document.querySelector("#burger");
const burgerMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("is-active");
});
