document.addEventListener('DOMContentLoaded', function() {
    const rotas = document.querySelector('.anime_broadcast_box .rotas');
    const rotasPro = document.querySelectorAll('.anime_broadcast_box .rotas > div');
    const rightBtn = document.querySelector('.anime_broadcast_box .right');
    const leftBtn = document.querySelector('.anime_broadcast_box .left');
    let deg = 0;
    let degImg = 0;
    let autoRota;

    // 定义函数
    const changeRotas = (obj, n) => {
        if(n > 0) {
            deg++;
        } else {
            deg--;
        }
        obj.style.transform = 'rotateX(-5deg) rotateY(' + (deg * 60 + 2) + 'deg)';
    };

    const changeImgs = (n) => {
        if(n > 0) {
            if(++degImg >= 6) {
                degImg = 0;
            }
        } else {
            if(--degImg < 0) {
                degImg = 5;
            }
        }
        rotasPro.forEach(item => item.classList.remove('sel'));
        rotasPro[degImg].classList.add('sel');
    };

    // 自动旋转的计时器
    const startAutoRotation = () => {
        stopAutoRotation(); // 确保没有其他计时器运行
        autoRota = setInterval(() => {
            changeRotas(rotas, -1);
            changeImgs(-1);
        }, 4000);
    };

    // 停止自动旋转
    const stopAutoRotation = () => {
        clearInterval(autoRota);
    };

    // 鼠标进入和离开事件
    document.querySelector('.anime_broadcast_box').addEventListener('mouseenter', stopAutoRotation);
    document.querySelector('.anime_broadcast_box').addEventListener('mouseleave', startAutoRotation);

    // 按钮点击事件
    rightBtn.addEventListener('click', () => {
        changeRotas(rotas, 1);
        changeImgs(1);
        stopAutoRotation();
        startAutoRotation(); // 重置定时器，以便用户操作后继续从当前图片开始自动切换
    });

    leftBtn.addEventListener('click', () => {
        changeRotas(rotas, -1);
        changeImgs(-1);
        stopAutoRotation();
        startAutoRotation(); // 重置定时器，以便用户操作后继续从当前图片开始自动切换
    });

    // 页面加载完成后立即开始自动旋转
    startAutoRotation();
});