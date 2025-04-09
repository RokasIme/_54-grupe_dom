export function header() {
  // const body = document.querySelector("body");
  //   const body = document.body;
  const menu = [
    { text: "Home", href: "/" },
    { text: "Text", href: "/text" },
    { text: "Food", href: "/food" },
    { text: "Darzas", href: "/darzas" },
    { text: "Header", href: "/header" },
    { text: "Click", href: "/click" },
  ];

  const currentPage =
    location.pathname.length > 1 && location.pathname.at(-1) === "/"
      ? location.pathname.slice(0, -1)
      : location.pathname;
  let linksHTML = "";

  console.log(currentPage);
  for (const link of menu) {
    let activePage = "";
    if (link.href === currentPage) {
      activePage = "active";
    }
    if (currentPage.length > 1) {
      linksHTML += `<a class="link ${activePage}" href="..${link.href}">${link.text}</a> `;
    } else {
      linksHTML += `<a class="link ${activePage}" href=".${link.href}">${link.text}</a> `;
    }
  }

  const HTML = `
    <header class="main-header">
      <img class="logo" src="./food/pizza.webp" alt="Logo" />
      <nav class="main-nav">${linksHTML}</nav>
    </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", HTML);
}
