# Practice - button, modal, input, select
React, Styled-components를 활용한 Button, Modal, Input, Select 연습 페이지입니다.
### Button
- `styled-components` props를 활용해 크기, 색상 조건부 구현
- label에 선택적으로 아이콘을 넣을 수 있도록 구현
### Modal
- `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
- `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
### Input
- 일반형식의 input
- 숫자를 넣었을 때, 3자리 수마다 콤마 ,가 찍히는 input 구현
- 각 input에 값을 입력하고 저장 버튼을 눌렀을 때 `{name: '입력 텍스트', price: "입력 금액"}` 을 alert에 표시
### Custom Select
- select를 클릭했을 때, option들이 나오고 특정 option을 클릭하면 select의 값 변경 구현
- select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현
  - 부모 컴포넌트 `overflow: hidden`이 적용되는 select와 적용되지 않는 select 구현
## Team
| 정승연 | 최재홍 |
| :---: | :---: |
| <img alt="정승연" src="https://avatars.githubusercontent.com/u/102347529?v=4.jpg" height="100" width="100"> | <img alt="최재홍" src="https://avatars.githubusercontent.com/u/106016375?v=4" height="100" width="100"> |
| [@xxyeon129](https://github.com/xxyeon129) |    [@allongsio](https://github.com/allongsio) |
|<p align="left">- Input <br/> - Select <br/> </p>|<p align="left">- Button <br/> - Modal </p>|
# Commit convention

|   feat   | 새로운 기능을 추가, 기존의 기능을 요구 사항에 맞추어 수정 |
| :------: | :-------------------------------------------------------- |
|  bugfix  | 기능에 대한 버그 수정                                     |
|   docs   | 문서 수정 (ex. README.md)                                 |
| refactor | 코드리펙토링                                              |
|  merge   | 병합                                                      |
|  design  | CSS 등 사용자 UI 디자인 변경                              |
|  style   | 기능에 직접적인 영향이 없는 단순 코드 수정                |
