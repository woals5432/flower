import products from "../flowers.json" assert { type: "json" };
//assert{type:'json'} - 외부파일이 json이라고 확실히 명시

// const elcard = document.querySelectorAll('.flower_dictionary_item > .item_card ')
// console.log(elcard)

// elcard.forEach(function (item) {
//   item.onclick = function () {
//     this.classList.toggle('active')
//   }
// })

//json 불러오기

// HTML 요소 가져오기
const selectButtons = document.querySelectorAll(".nav_hashtag_namewrap button");
const ul = document.querySelector(".flower_dictionary_list");

// JSON 데이터를 저장할 변수
let myProduct;

// 버튼 클릭 이벤트 핸들러
selectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.value;

    // 선택한 카테고리에 해당하는 항목 필터링
    ul.innerHTML = ""; // 기존 목록 삭제
    const filteredData = myProduct.filter((item) =>
      item.category.includes(selectedCategory)
    );
    filteredData.forEach((item) => createItem(item));
  });
});

// JSON 데이터 가져오기
const importData = () => {
  fetch("flowers.json")
    .then((response) => response.json())
    .then((data) => {
      myProduct = data.data; // JSON 데이터를 myProduct 변수에 저장
      myProduct.forEach((product) => {
        if (!document.getElementById(product.id)) {
          createItem(product);
        }
      });
    })
    .catch((error) => console.error("JSON 파일 로딩 중 오류 발생: ", error));
};

importData();

// 화면에 항목을 추가하는 함수
function createItem(product) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const h4 = document.createElement("h4");
  img.classList.add("image");
  div.classList.add("info");
  li.classList.add("flowers");

  img.setAttribute("src", product.img);
  img.setAttribute("data-id", product.id);
  li.setAttribute("data-id", product.id);
  h4.innerText = product.name;
  span.innerText = product.info;
  ul.appendChild(li);
  li.appendChild(img);
  li.appendChild(div);
  div.appendChild(h4);
  div.appendChild(span);

  const liElements = document.querySelectorAll(".flowers");

  // liElements.forEach(li => {
  //   li.addEventListener('click', () => {
  //     console.log('li입니다!!!');
  //     const imgElement = li.querySelector('img');
  //     const description = li.querySelector('.info');

  //     // 이미지를 뒤집기 위해 CSS 클래스를 추가/제거
  //     imgElement.classList.toggle('flipped');

  //     // 설명창 표시/숨김을 위해 CSS 클래스를 추가/제거
  //     description.classList.toggle('show-description');
  //     //console.log('클릭!!!');
  //   });
  // });

  li.addEventListener("click", (e) => {
    const clickId = e.target.dataset.id;
    console.log("클릭한 곳는 ? ", e.target);
    console.log("클릭한 곳 ID는 ? ", clickId);

    if (clickId) {
      const toTarget = document.querySelector(
        `.flower_dictionary_list>li[data-id="${clickId}"]`
      ); //클릭한 li
      console.log("toTarget ? ", toTarget);

      const imgElement = toTarget.children[0]; //클릭한 li 요소중 첫번째꺼 - 이미지
      const description = toTarget.children[1]; //클릭한 li 요소중 두번째꺼 - info

      imgElement.classList.toggle("flipped");
      description.classList.toggle("show-description");
    }
  });
}

// const select = document.querySelector('.nav_hashtag_namewrap');
// const ul = document.querySelector('.flower_dictionary_list');
// const button = document.querySelector('button');

// let myProduct;

// const createItem = (product) => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   li.id = product.id;
//   img.setAttribute('src', product.img);
//   li.appendChild(img);
//   ul.appendChild(li);
// };

// const importData = () => {
//   fetch('your_data.json')
//     .then(response => response.json())
//     .then(data => {
//       myProduct = data.data;
//       myProduct.forEach(product => {
//         if (!document.getElementById(product.id)) {
//           createItem(product);
//         }
//       });
//     })
//     .catch(error => console.error('JSON 파일 로딩 중 오류 발생: ', error));
// };

// importData();

// const removeItems = () => {
//   const items = document.querySelectorAll('li');
//   items.forEach(aa => {
//     aa.remove();
//   });
// };

// const selectCategory = (aa) => {
//   if (!myProduct) {
//     return;
//   }

//   const { selectedIndex: n } = aa.target.options;
//   const { value } = aa.target.options[n];

//   const filtered = myProduct.filter((product) => {
//     return product.category.includes(value);
//   });

//   removeItems();
//   filtered.forEach(aa => {
//     createItem(aa);
//   });
// };

// select.addEventListener('change', selectCategory);

// button.addEventListener('click', () => {
//   const selectedCategory = select.value;
//   ul.innerHTML = ''; // 기존 목록 삭제
//   const filteredData = myProduct.filter(item => item.category.includes(selectedCategory));
//   filteredData.forEach(item => createItem(item));
// });
