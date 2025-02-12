//导入json数据数组
const recommend_game_data = [
    {
        "name": "明日方舟",
        "img": "./images/game_content/game1.png",
        "href": "#"
    },
    {
        "name": "只狼",
        "img": "./images/game_content/game2.png",
        "href": "#"
    },
    {
        "name": "洛克王国",
        "img": "./images/game_content/game3.png",
        "href": "#"
    },
    {
        "name": "FGO",
        "img": "./images/game_content/game4.png",
        "href": "#"
    },
    {
        "name": "碧蓝档案",
        "img": "./images/game_content/game5.png",
        "href": "#"
    },
    {
        "name": "黑暗之魂1",
        "img": "./images/game_content/game6.png",
        "href": "#"
    },
    {
        "name": "黑暗之魂2",
        "img": "./images/game_content/game7.png",
        "href": "#"
    },
    {
        "name": "黑暗之魂3",
        "img": "./images/game_content/game8.png",
        "href": "#"
    },
    {
        "name": "原神",
        "img": "./images/game_content/game9.png",
        "href": "#"
    },
    {
        "name": "造梦西游3",
        "img": "./images/game_content/game10.png",
        "href": "#"
    },
    {
        "name": "绣湖系列",
        "img": "./images/game_content/game11.png",
        "href": "#"
    },
    {
        "name": "PUBG",
        "img": "./images/game_content/game12.png",
        "href": "#"
    },
    {
        "name": "鸣潮",
        "img": "./images/game_content/game13.png",
        "href": "#"
    },
    {
        "name": "王者荣耀",
        "img": "./images/game_content/game14.png",
        "href": "#"
    },
    {
        "name": "英魂之刃",
        "img": "./images/game_content/game15.png",
        "href": "#"
    },
    {
        "name": "魔法使之夜",
        "img": "./images/game_content/game16.png",
        "href": "#"
    },
    {
        "name": "月姬Remake",
        "img": "./images/game_content/game17.png",
        "href": "#"
    },
    {
        "name": "summer pocket",
        "img": "./images/game_content/game18.png",
        "href": "#"
    },
    {
        "name": "命运石之门系列",
        "img": "./images/game_content/game19.png",
        "href": "#"
    },
    {
        "name": "P5R",
        "img": "./images/game_content/game20.png",
        "href": "#"
    },
    {
        "name": "艾尔登法环",
        "img": "./images/game_content/game21.png",
        "href": "#"
    },
    {
        "name": "奥奇传说",
        "img": "./images/game_content/game22.png",
        "href": "#"
    },
    {
        "name": "和平精英",
        "img": "./images/game_content/game23.png",
        "href": "#"
    },
    {
        "name": "CS",
        "img": "./images/game_content/game24.png",
        "href": "#"
    },
    {
        "name": "穿越火线",
        "img": "./images/game_content/game25.png",
        "href": "#"
    },
    {
        "name": "逆战",
        "img": "./images/game_content/game26.png",
        "href": "#"
    },
    {
        "name": "mc",
        "img": "./images/game_content/game27.png",
        "href": "#"
    },
    ];

    

    // 翻页按钮实现开始
//输出数据
//console.log(data);

// 翻页按钮实现开始
// 绑定ul和按钮
let recommend_list_01= document.getElementById("recommend_list_01");
// 按钮
let recommend_prev_page_btn = document.getElementById("recommend_prev_page");
let recommend_page_1_btn = document.getElementById("recommend_page_1");
let recommend_page_2_btn = document.getElementById("recommend_page_2");
let recommend_page_3_btn = document.getElementById("recommend_page_3");
let recommend_next_page_btn = document.getElementById("recommend_next_page");
let recommend_btns = [recommend_prev_page_btn, recommend_page_1_btn, recommend_page_2_btn, recommend_page_3_btn, recommend_next_page_btn];
// 点击按钮
//当前页码,设置初始值与大小
let recommend_page_num = 1;
let recommend_page_size = 3;
recommend_prev_page_btn.addEventListener("click", function() {
    if (recommend_page_num > 1) {
        recommend_page_num--;
        hide_recommend_lists();
        generate_recommend_lists(recommend_page_num);
    }else {
        alert("已经是第一页了");
    }
});
recommend_page_1_btn.addEventListener("click", function() {
    recommend_page_num = 1;
    hide_recommend_lists();
    generate_recommend_lists(recommend_page_num);
});
recommend_page_2_btn.addEventListener("click", function() {
    recommend_page_num = 2;
    hide_recommend_lists();
    generate_recommend_lists(recommend_page_num);
});
recommend_page_3_btn.addEventListener("click", function() {
    recommend_page_num = 3;
    hide_recommend_lists();
    generate_recommend_lists(recommend_page_num);
});
recommend_next_page_btn.addEventListener("click", function() {
    if (recommend_page_num < recommend_page_size) {
        recommend_page_num++;
        hide_recommend_lists();
        generate_recommend_lists(recommend_page_num);
    }else {
        alert("已经是最后一页了");
    }
});
// 排他原则，隐藏按钮background-color
function hide_recommend_lists() {
    // 隐藏其他按钮
    for (let i = 0; i < recommend_btns.length; i++) {
        recommend_btns[i].style.backgroundColor = "skyblue";
    }
}
//生成ul
function generate_recommend_lists(num) {
    let recommend_list = recommend_list_01;
    let start = 0;
    let end = 20;
    if(num === 1){
        start = 0;
        end = 20;
    }else if(num === 2){
        start = 20;
        end = 40;
    }else if(num === 3){
        start = 40;
        end = 60;
    }else{
        return;
    }
    // 更改按钮样式
    recommend_btns[recommend_page_num].style.backgroundColor = "rgb(135, 135, 235)";
    //清空recommend_list内部li标签
    while(recommend_list.hasChildNodes()){
        recommend_list.removeChild(recommend_list.firstChild);
    }
    //遍历json数据数组（一次20个)
    for(let i=start;i<end;i++){
        //创建li标签
        let li = document.createElement("li");
        li.classList.add("recommend_item");
        //创建div标签
        let div = document.createElement("div");
        //创建存放img的a标签
        let a = document.createElement("a");
        a.href = recommend_game_data[i].href;
        // 创建存放p的a标签
        let a2 = document.createElement("a");
        a2.href = recommend_game_data[i].href;
        //创建img标签
        let img = document.createElement("img");
        img.src = recommend_game_data[i].img;
        img.alt = recommend_game_data[i].name;
        //创建p标签
        let p = document.createElement("p");
        p.textContent = recommend_game_data[i].name;
        //将img、p、a标签添加到a标签中
        a.appendChild(img);
        a2.appendChild(p);
        //将a,a2标签添加到div标签中
        div.appendChild(a);
        div.appendChild(a2);
        //将div标签添加到li标签中
        li.appendChild(div);
        //将li标签添加到recommend_list中
        recommend_list.appendChild(li);
    }
    
}
        
// 翻页按钮实现结束

// 生成初始页面
generate_recommend_lists(1);