    function ochish() {
    document.querySelector(`.menu`).style = `display: flex;`
}
function hosh() {
    document.querySelector('.bittadiv').style = 'display: flex;'
}
function hosh2() {
    document.querySelector('.bittadiv').style = 'display: none;'
}
function yopish() {
    document.querySelector(`.menu`).style = `display: none;`
}



data.map(item => {
    document.querySelector(".cardlar").innerHTML += `
    <div class="cardlar1">
    <img class="img" src="${item.img}" alt="">
    <h6>${item.color}</h6>
    <h5>${item.brand}</h5>
    <h3>${item.name}</h3>
    <img class="gg" src="./Group.png" alt="">
    <div class="yana">
        <p>${item.price}</p>
        <button><a href="">add</a></button>
    </div>
</div>

    `
})

function lyuboy() {
    var input=document.querySelector(`.input`).value;
    document.querySelector(".cardlar").innerHTML = " "
    data.map(item => {
    if(item.name.includes(input)){
        document.querySelector(".cardlar").innerHTML += `
        <div class="cardlar1">
        <img class="img" src="${item.img}" alt="">
        <h6>${item.color}</h6>
        <h5>${item.brand}</h5>
        <h3>${item.name}</h3>
        <img class="gg" src="./Group.png" alt="">
        <div class="yana">
            <p>${item.price}</p>
            <button><a href="">add</a></button>
        </div>
    </div>
    
        `
    }
})}


var color=[]

function getcolor(){
document.querySelector(".m1").innerHTML=""
item.map((item,key)=>{
    var rux=true
      for (let i = 0; i < color.length; i++) {
          if (item.color==color[i]) {
              rux=false;
          }
      }
})
}