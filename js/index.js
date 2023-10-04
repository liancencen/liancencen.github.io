window.onload = function () {
    //1.獲取標籤
    var slider = document.getElementById('slider');
    var slider_main = document.getElementById('slider_main');
    var allBoxs = slider_main.children;
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var slider_index = document.getElementById('slider_index');
    var iNOW = 0;//當前可視元素的索引

    //2.動態創建索引器
    for (var i = 0; i < allBoxs.length; i++) {
        var span = document.createElement('span');
        if (i === 0) {
            span.className = 'slider_index_icon current';
        } else {
            span.className = 'slider_index_icon';
        }
        span.innerText = i + 1;
        slider_index.appendChild(span);

    }

    //3.讓滾動的元素歸位
    var scroll_w = parseInt(getStyle(slider, 'width'));
    console.log(scroll_w);
    for (var j = 1; j < allBoxs.length; j++) {
        allBoxs[j].style.left = scroll_w + 'px';
    }
    //4.監聽下一張按鈕的事件
    next.onclick = function () {
        /**
         * 1.讓當前可視元素動畫左移
         * 2.讓下一張圖片 快速的顯示到右邊
         * 3.讓這個元素動畫進入
         */
        startAnimation(allBoxs[iNOW], {
            "left": -scroll_w
        })
        //讓iNOW更新
        iNOW++;
        if (iNOW >= allBoxs.length) {
            iNOW = 0;
        }
        allBoxs[iNOW].style.left = scroll_w + 'px';
        startAnimation(allBoxs[iNOW], {
            "left": 0
        })
        //改變索引
        changeIndex();
    }

    //控制當前的索引
    function changeIndex() {
        for (var i = 0; i < slider_index.children.length; i++) {
            slider_index.children[i].className = 'slider_index_icon';
        }
        slider_index.children[iNOW].className = 'slider_index_icon current';
    }
}