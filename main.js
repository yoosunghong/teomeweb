(function () {
  var STATUS = {
    released: "Released",
    development: "In Development",
    upcoming: "Coming Soon"
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function renderGames() {
    var list = document.getElementById("games-list");
    var games = window.TEOME_GAMES || [];
    if (!list) return;

    var count = document.getElementById("games-count");
    if (count) count.textContent = String(games.length).padStart(2, "0") + " titles";

    games.forEach(function (g, i) {
      var card = el("article", "game game--" + (g.status || "upcoming"));

      var cover = el("div", "game__cover");
      if (g.cover) {
        var img = el("img");
        img.src = g.cover;
        img.alt = g.title + " 커버";
        img.loading = "lazy";
        cover.appendChild(img);
      } else {
        cover.appendChild(el("span", "game__cover-no", String(i + 1).padStart(2, "0")));
        cover.appendChild(el("span", "game__cover-title", g.title));
      }
      cover.appendChild(el("span", "game__status", STATUS[g.status] || g.status));
      card.appendChild(cover);

      var body = el("div", "game__body");
      var head = el("div", "game__head");
      head.appendChild(el("h3", "game__title", g.title));
      head.appendChild(el("span", "game__year", g.year || ""));
      body.appendChild(head);
      if (g.tagline) body.appendChild(el("p", "game__tagline", g.tagline));

      var meta = [g.genre].concat(g.platforms || []).filter(Boolean);
      if (meta.length) body.appendChild(el("p", "game__meta", meta.join(" · ")));

      if (g.links && g.links.length) {
        var links = el("div", "game__links");
        g.links.forEach(function (l) {
          var a = el("a", "game__link", l.label + " ↗");
          a.href = l.url;
          a.target = "_blank";
          a.rel = "noopener";
          links.appendChild(a);
        });
        body.appendChild(links);
      }

      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function reveal() {
    var targets = document.querySelectorAll(".section, .game, .principle");
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) {
      t.classList.add("reveal");
      io.observe(t);
    });
  }

  function navState() {
    var nav = document.querySelector(".nav");
    var onScroll = function () {
      nav.classList.toggle("nav--solid", window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  renderGames();
  reveal();
  navState();
})();
