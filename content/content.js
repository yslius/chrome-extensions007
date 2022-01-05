function test001() {
    // ページネーションを取得する
    var eleTagsPage = document.getElementsByClassName("a-text-center pagination-full");
    // alert(eleTagsPage.length);

    eleLi = eleTagsPage[0].getElementsByTagName("li");

    eleA = eleLi[eleLi.length - 1].getElementsByTagName("a");
    console.log(eleA.innerText);

    var text_blob = "";
    text_blob = '"日付","商品名","価格","注文番号",\n';
    // for (var i = 0; i < eleLi.length - 2; i++) {
    var eleTags001 = document.getElementsByClassName("a-box-group");
    console.log(eleTags001.length);

    for (var j = 0; j < eleTags001.length; j++) {
        var strDate = "";
        var strValue = "";
        var strID = "";
        var strName = "";

        // 商品情報を取得する
        // 注文日
        var eleTags002 = eleTags001[j].getElementsByClassName("a-span3");
        // console.log(eleTags002.length);
        var eleTags003 = eleTags002[0].getElementsByClassName("value");
        strDate = eleTags003[0].innerText;
        console.log(strDate);

        // 金額
        var eleTags004 = eleTags001[j].getElementsByClassName("a-span2");
        // console.log(eleTags004.length);
        var eleTags005 = eleTags004[0].getElementsByClassName("value");
        strValue = eleTags005[0].innerText;
        console.log(strValue);

        // 注文番号
        var eleTags005 = eleTags001[j].getElementsByClassName("a-fixed-right-grid-col actions a-col-right");
        // console.log(eleTags005.length);
        var eleTags006 = eleTags005[0].getElementsByClassName("value");
        strID = eleTags006[0].innerText;
        console.log(strID);

        // 商品名
        var eleTags007 = eleTags001[j].getElementsByClassName("shipment");
        // console.log(eleTags007.length);
        var eleTags008 = eleTags007[0].getElementsByClassName("a-fixed-left-grid-col a-col-right");
        // console.log(eleTags008.length);
        var eleTags009 = eleTags008[0].getElementsByClassName("a-link-normal");
        strName = eleTags009[0].innerText;
        console.log(strName);

        // text_blob = format("%s,%s,%s,%s\n", [strDate, strName, strValue, strID]);
        // text_blob += strDate + "," + strName + "," + strValue + "," + strID + "\n";
        text_blob += '"' + strDate + '","' + strName +
            '","' + strValue + '","' + strID + '"\n';
        // text_blob += strDate + "\t" + strName + "\t" + strValue + "\t" + strID + "\n";
        console.log(text_blob);
    }

    //     eleA = eleLi[i + 1].getElementsByTagName("a");
    //     console.log(eleA[0].href);
    //     location.href = eleA[0].href;
    // }

    return text_blob;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    console.log(request.message);

    var text_ret = "";
    if (request.message == "get") {
        text_ret = test001();
    } else if (request.message == "page") {
        location.href = "https://www.amazon.co.jp/gp/your-account/order-history/ref=ppx_yo_dt_b_pagination_3_3?ie=UTF8&orderFilter=year-2021&search=&startIndex=20";
        text_ret = "ページ遷移しました";
    } else {

    }

    // const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    // await _sleep(10);

    sendResponse(text_ret);

    return true;
});