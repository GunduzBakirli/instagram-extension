const addButton = () => {
  let box = document.querySelector("header");
  let button = document.createElement("button");
  button.innerText = "Followers Filter";
  box.appendChild(button);
  let followers = document.querySelector('[href*="followers"]');
  let followings = document.querySelector('[href*="following"]');
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  var namesFollewers = [];
  var namesFollowing = [];
  var finalList = [];
  let linksFollowers = [];
  async function followerss() {
    followers.click();
    ht = 1;
    last_ht = 0;
    while (ht != last_ht) {
      last_ht = ht;
      await sleep(2000);
      document
        .querySelector("div._aano")
        .scrollTo(0, document.querySelector("div._aano").scrollHeight);
      ht = document.querySelector("div._aano").scrollHeight;
      linksFollowers = document.querySelectorAll(
        "a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.notranslate._a6hd"
      );
    }
  }
  async function following() {
    followings.click();
    button.remove();
    ht = 1;
    last_ht = 0;
    while (ht != last_ht) {
      last_ht = ht;
      await sleep(2000);
      document
        .querySelector("div._aano")
        .scrollTo(0, document.querySelector("div._aano").scrollHeight);
      ht = document.querySelector("div._aano").scrollHeight;
      linksFollowing = document.querySelectorAll(
        "a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.notranslate._a6hd"
      );
    }
  }
  button.addEventListener("click", async () => {
    await followerss();
    // console.log(linksFollowers);
    linksFollowers.forEach((element) => {
      namesFollewers.push(element.innerText);
    });
    document.querySelector('[role="dialog"]').querySelector("._abl-").click();

    await sleep(2000);
    await following();
    linksFollowing.forEach((element) => {
      namesFollowing.push(element.innerText);
    });

    namesFollowing.forEach((element) => {
      if (namesFollewers.includes(element)) return;
      finalList.push(element);
    });
    console.log(finalList);
    document.querySelector('[role="dialog"]').querySelector("._abl-").click();
    await sleep(2000);
    const container = document.createElement("div");
    container.class = "container";
    container.id = "div";
    const h1 = document.createElement("h1");
    h1.innerText = "Not Following";
    h1.id = "title";
    container.appendChild(h1);
    const list = document.createElement("ul");
    list.id = "ul";
    container.appendChild(list);
    box.appendChild(container);
    await sleep(2000);
    finalList.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = "@" + element;
      li.id = "li";
      list.appendChild(li);
    });
  });
};

let inter = setInterval(() => {
  let isLoad = document
    .querySelector("#splash-screen")
    .getAttribute("style")
    .includes("display: none");
  if (isLoad) {
    clearInterval(inter);
    setTimeout(() => {
      addButton();
    }, 0);
    return;
  }
}, 1000);
