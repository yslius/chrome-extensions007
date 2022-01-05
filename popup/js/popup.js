$('#get-data001').on('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        // 取得したタブid(tabs[0].id)を利用してsendMessageする
        chrome.tabs.sendMessage(tabs[0].id, { message: 'get' }, function(item) {
            // alert("popup.js " + item);
            $('#memo').val(item);
        });
    });
});

$('#get-data002').on('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        // 取得したタブid(tabs[0].id)を利用してsendMessageする
        chrome.tabs.sendMessage(tabs[0].id, { message: 'page' }, function(item) {
            alert("popup.js page " + item);

        });
    });
});

$('#get-data003').on('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        // 取得したタブid(tabs[0].id)を利用してsendMessageする
        // chrome.tabs.sendMessage(tabs[0].id, { message: $('#memo').val() }, function(item) {

        //     alert("popup.js save " + item);
        // });

        // Atagを作りデータをダウンロードする
        const a = document.createElement('a');
        var dateNow = new Date();
        // var strDateNow = getStringFromDate(dateNow);
        var year_str = dateNow.getFullYear();
        //月だけ+1すること
        var month_str = ("0" + (dateNow.getMonth() + 1)).slice(-2);
        var day_str = ("0" + dateNow.getDate()).slice(-2);
        var hour_str = ("0" + dateNow.getHours()).slice(-2);
        var minute_str = ("0" + dateNow.getMinutes()).slice(-2);
        var second_str = ("0" + dateNow.getSeconds()).slice(-2);
        format_str = 'YYYYMMDDhhmmss';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        format_str = format_str.replace(/hh/g, hour_str);
        format_str = format_str.replace(/mm/g, minute_str);
        format_str = format_str.replace(/ss/g, second_str);
        var strDateNow = format_str;

        let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
        a.href = URL.createObjectURL(new Blob([bom, $('#memo').val()], { type: 'text/plain' }));
        a.download = "AmazonHistory_" + strDateNow + ".csv";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    });
});