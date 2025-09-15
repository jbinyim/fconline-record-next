# FC Info

<img width="3212" height="2023" alt="Image" src="https://github.com/user-attachments/assets/2c91c180-cf8d-4942-a819-72c7fc3dedea" />

---

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [팀 구성](#팀-구성)

---

## 프로젝트 소개

FC 온라인 전적검색 사이트는 EA SPORTS FC 온라인 이용자들의 경기 데이터를 쉽고 빠르게 조회할 수 있도록 만든 웹 서비스입니다.

사용자는 닉네임만 입력하면 공식경기와 클래식 1대1 기록을 확인할 수 있고, 각 경기별 상세 기록과 라인업까지 확인할 수 있습니다. 또한 유저 프로필에 코멘트를 남길 수 있어 단순한 검색을 넘어 커뮤니티적인 요소도 함께 제공합니다.

단순 전적 확인을 넘어, 경기 흐름과 선수 기용 패턴까지 분석할 수 있도록 설계된 프로젝트입니다.

### 링크

- **백엔드 저장소**: [GitHub Repository](https://github.com/jbinyim/fconline-db)

---

## 주요 기능

- **유저 전적 검색**: 특정 유저를 입력하면 공식경기 및 클래식 1:1 전적 조회 가능
- **공식경기 & 클래식 1:1 모드 지원**: 두 경기 모드를 분리된 탭 또는 UI로 제공
- **유저에게 코멘트 기능**: 각 유저 전적에 사용자 코멘트를 추가할 수 있음
- **경기 기록 정보**: 전적 요약, 승/무/패, 득실점 등 기본 통계 조회
- **경기 상세 기록**: 경기별 점수, 시간, 주요 이벤트 나열
- **라인업 확인**: 양 팀의 출전 라인업 정보 제공
- **최근 조회한 유저**: 사용자 경험을 높이기 위해 최근 조회 유저 기록 표시됨

---

<table>
  <thead>
    <tr>
      <th align="center">홈 화면</th>
      <th align="center">유저 기록</th>
      <th align="center">상세 기록</th>
      <th align="center">한줄평가</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/54be89ed-6493-436f-b75a-9654d29b4536" alt="홈 화면" width="200">
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/3760a42f-bc80-4193-b3ef-86bf4c8dc1aa" alt="유저 기록" width="200">
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/9b5fb23d-0c09-4fe1-a0b1-a331e83c5f19" alt="상세 기록" width="200">
      </td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/c3a6fee4-38ad-4e21-af86-bf5edc0eb8a0" alt="한줄평가" width="200">
      </td>
    </tr>
  </tbody>
</table>

---

## 팀 구성

<table align="center">
  <tbody>
    <tr>
      <th>Team Leader</th>
      <th>Team Member</th>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/jbinyim">
          <img src="https://github.com/jbinyim.png?size=100" width="100px" alt="임정빈"/>
          <br />
          <b>임정빈</b>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Shinmilli">
          <img src="https://github.com/Shinmilli.png?size=100" width="100px" alt="송동건"/>
          <br />
          <b>송동건</b>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://swift-fuchsia-8b7.notion.site/FC-Info-1cee8b00d07a8171a170e370f38d12d8?pvs=74" target="_blank">개인 리포트</a>
      </td>
      <td align="center">
        <a href="https://www.notion.so/223e8b00d07a8012aa56f24b74d65b07?source=copy_link" target="_blank">개인 리포트</a>
      </td>
    </tr>
  </tbody>
</table>

<details>
<summary><strong>팀원별 주요 작업 내용</strong></summary>
<div markdown="1">

- **임정빈**

  - 홈 페이지
  - 한줄 평가 페이지
  - 유저 정보, 경기 기록, 경기 상세 기록, 라인업 데이터 호출
  - 코멘드 조회, 생성, 삭제, 추천 API 구현
  - FC온라인 이벤트 크롤링 데이터

- **송동건**

  - 유저 정보, 경기 기록, 경기 기록 상세, 라인업 디자인 퍼블리싱

</div>
</details>

---

## 기술 스택

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-770C56?style=flat-square&logo=date-fns&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react-query&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-000000?style=flat-square&logo=vercel&logoColor=white)

---
