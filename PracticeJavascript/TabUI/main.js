const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + 'px';
    line.style.width = tabActive.offsetWidth + 'px';
})



tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active');
        pane.classList.add('active');
    }
})


//Đọc thêm: 
/*
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabItemsActiveLine = $('.tab-item.active');
const tabPanes = $$('.tab-pane');
const line = $('.line');

function moveLineItems(itemsActive) {
    line.style.left = `${itemsActive.offsetLeft}px`;
    line.style.width = `${itemsActive.offsetWidth}px`;
    // Tối ưu việc lặp lại đoạn code này 2 lần thì ta có thể
    // tái sử dụng chỗ khác gọn hơn
}
moveLineItems(tabItemsActiveLine);

[...tabItems].forEach(function (item, index) {
    item.addEventListener('click', function () {
        // Tối ưu kiểm tra điểu kiện class element có đang chứa active
        // hay không, có thì sẽ dừng lại, tránh việc bị spam click 
        if (this.classList.contains('active')) {
            return
        }
         const tabItemsActive = $('.tab-item.active');
         const tabPanesActive = $('.tab-pane.active');
 
         tabItemsActive.classList.remove('active');
         tabPanesActive.classList.remove('active');
 
         this.classList.add('active');
 
         [...tabPanes][index].classList.add('active');
 
         moveLineItems(this) // tái sử dụng
    })
})
*/