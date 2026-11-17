/*
 * Teome 게임 목록
 * ──────────────────────────────────────────────
 * 게임을 추가/수정하려면 아래 배열만 고치면 됩니다.
 *
 *  title     : 게임 이름
 *  tagline   : 한 줄 소개
 *  genre     : 장르
 *  year      : 출시(예정) 연도
 *  status    : "released" | "development" | "upcoming"
 *  platforms : ["PC", "Mobile", ...]
 *  cover     : 커버 이미지 경로 (예: "assets/games/mygame.jpg"), 없으면 비워두기
 *  url       : 커버(배너)·제목 클릭 시 이동할 주소, 없으면 비워두기
 *  links     : [{ label: "Steam", url: "https://..." }, ...]
 */
window.TEOME_GAMES = [
  {
    title: "illova",
    tagline: "네 명의 어린 왕들과 만들어 나가는 은하 이야기",
    genre: "TBA",
    year: "2026",
    status: "development",
    platforms: ["PC"],
    cover: "assets/games/illova.webp",
    url: "https://illova.app",
    links: []
  },
  {
    title: "Project 02",
    tagline: "다음 이야기를 준비하고 있습니다.",
    genre: "TBA",
    year: "TBA",
    status: "upcoming",
    platforms: [],
    cover: "",
    links: []
  }
];
