$(function () {
    // 时间
    setInterval(function () {
        let date = new Date();
        let year = date.getFullYear();
        let month = formatNumber(date.getMonth() + 1);
        let day = formatNumber(date.getDate());
        let hour = formatNumber(date.getHours());
        let minute = formatNumber(date.getMinutes());
        let second = formatNumber(date.getSeconds());
        let tody = year + '年' + month + '月' + day + '日&emsp;' + hour + ':' + minute + ':' + second;
        $('.time').html(tody);
    }, 1000);
    function formatNumber(n) {
        return n > 9 ? n : '0' + n;
    }

    

});
