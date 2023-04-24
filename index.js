let users = [
    {
        id : 1,
        name : 'Minh Cường',
        score :0,
    },
    {
        id : 2,
        name : 'Quốc Hai',
        score :0,
    },
    {
        id : 3,
        name : 'Phú Hoàng',
        score :0,
    }
]

renderdataUsers();
localStorage.setItem('users',JSON.stringify(users))
const usersDB = JSON.parse(localStorage.getItem("users")) ?? [];
console.log(11111,usersDB);
function renderdataUsers() {

    const divElement = document.querySelector('#content')

    let contentDiv = "";

    usersDB.forEach((element,index) => {
        contentDiv += `
        <div id="content">
            <div id="left-content">
                <i class="fa-solid fa-xmark"></i>
                <i class="fa-regular fa-chess-queen"></i>
                <p>${element.name}</p>
            </div>
            <div id="right-content">
                <i class="fa-solid fa-minus" id="icon"></i>
                <p>${element.score}</p>
                <i class="fa-solid fa-plus" id="icon-1"></i>
            </div>
        </div>`
    });
    divElement.innerHTML = contentDiv;
}