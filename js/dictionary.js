import products from "../your_data.json" assert{type: 'json'};
//assert{type:'json'} - 외부파일이 json이라고 확실히 명시

const elcard = document.querySelectorAll('.flower_dictionary_item > .item_card ')
console.log(elcard)

elcard.forEach(function (item) {
  item.onclick = function () {
    this.classList.toggle('active')
  }
})



//json 불러오기

//const btn = document.querySelector('button');
//const select = document.querySelector('select');
let myProduct;

const createItem = (product) => {
  const ul = document.querySelector('.flower_dictionary_list'); //원래있는거 선택

  const li = document.createElement('li'); //새로운 엘리먼트 생성
  const img = document.createElement('img');


  //li.setAttribute('id',product.id);
  li.id = product.id; //id는 안 만들어도 됨(기본 속성으로 있음)
  img.setAttribute('src', product.img); //img에 src속성 만들고 value내용삽입  

  li.append(img);

  ul.append(li);

};

const importData = () => {
  // 여기서 JSON 파일을 가져오는 비동기 작업을 수행
  fetch('your_data.json') // JSON 파일 경로를 지정
    .then(response => response.json()) // JSON 데이터로 변환
    .then(data => {
      myProduct = data.data; // JSON 데이터를 myProduct 변수에 저장
      myProduct.forEach((product) => {
        if (!document.getElementById(product.id)) { // 클릭할 때마다 추가되는 것 방지(기존 아이디값이 없을 때만 작동)
          createItem(product);
        }
      });
    })
    .catch(error => console.error('JSON 파일 로딩 중 오류 발생: ', error));
};

const removeItems = () => {
  const items = document.querySelectorAll('li');
  items.forEach((aa) => {
    aa.remove()
  })
}

const selectCategory = (aa) => {
  if (!myProduct) { return }

  const { selectedIndex: n } = aa.target.options; //구조분해(destructuring), 이름 n으로 바꿈
  const { value } = aa.target.options[n]
  //console.log(value)


  const filterd = myProduct.filter((product) => {
    return product.category === value;
  })

  removeItems()
  filterd.forEach((aa) => {
    createItem(aa);
  })
}
importData()


//btn.addEventListener('click', importData)
//select.addEventListener('change', selectCategory)

