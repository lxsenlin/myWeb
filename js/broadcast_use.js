// 首页轮播图
var box = document.getElementsByClassName('broadcast_box')[0];
var imagesAndUrl = [{
  imgSrc : './images/home_content/1.jpg',
  linkHref : "https://space.bilibili.com/432274951?spm_id_from=333.1007.0.0"
},{
  imgSrc : './images/home_content/2.jpg',
  linkHref : 'https://ak.hypergryph.com/special/ad-brand-2024/index.html'
},{
  imgSrc : './images/home_content/3.jpg',
  linkHref : 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/'
},{
  imgSrc : './images/home_content/4.jpg',
  linkHref : 'https://store.steampowered.com/app/825630/STEINSGATE_0/'
},{
  imgSrc : './images/home_content/5.jpg',
  linkHref : 'https://search.bilibili.com/all?keyword=%E5%8F%8D%E5%8F%9B%E7%9A%84%E9%B2%81%E8%B7%AF%E4%BF%AE&from_source=webtop_search&spm_id_from=333.1007&search_source=5'
}];
// box => 你需要创建轮播图的父级元素
// imagesAndUrl => 数组，存放图片地址以及图片的连接地址
var broadcast = new Broadcast(box,imagesAndUrl,{
      transitionTime : 800, // 动画过渡时间，默认为800ms
      intervalTime : 5000 // 图片切换时间，默认为5s
 });

// //  番剧收集页面轮播图
// var box2 = document.getElementsByClassName('anime_broadcast_box')[0];
// var imagesAndUrl2 = [{
//   imgSrc : './images/anime_content/1.jpg',
//   linkHref : 'https://www.bilibili.com/bangumi/play/ss29321'
// },{
//   imgSrc : './images/anime_content/2.jpg',
//   linkHref : 'https://www.bilibili.com/bangumi/play/ss29321'
// },{
//   imgSrc : './images/anime_content/3.jpg',
//   linkHref : 'https://www.bilibili.com/bangumi/play/ss29321'
// },{
//   imgSrc : './images/anime_content/4.jpg',
//   linkHref : 'https://www.bilibili.com/bangumi/play/ss29321'
// },{
//   imgSrc : './images/anime_content/5.jpg',
//   linkHref : 'https://www.bilibili.com/bangumi/play/ss29321'
// }];
// var broadcast2 = new Broadcast(box2,imagesAndUrl2,{
//       transitionTime : 800, // 动画过渡时间，默认为800ms
//       intervalTime : 5000 // 图片切换时间，默认为5s
//  });