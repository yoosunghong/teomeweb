# Teome — teomestudio.com

Teome 게임 스튜디오 공식 웹사이트. 빌드 과정 없는 정적 사이트이며 GitHub Pages로 배포됩니다.

## 게임 추가·수정
`games.js`의 `TEOME_GAMES` 배열만 수정하면 됩니다. 커버 이미지는 `assets/games/`에 넣고 `cover` 경로를 지정하세요.

## 로컬 미리보기
```bash
python -m http.server 5173
```

## 배포
`main` 브랜치에 push하면 GitHub Pages가 자동으로 반영합니다. 커스텀 도메인은 `CNAME` 파일로 지정됩니다.
