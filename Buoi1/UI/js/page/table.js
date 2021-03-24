addEvent();

function addEvent() {
    //Nhap dup chuot hien thi form chi tiet
    $("#tbListCustomer tbody").on('dblclick', 'tr', function () {
        $(".dialog").removeClass("dialog-hide");
        rowOnDbClick();
    })
}
/**
 * Nhap dup chuot bao ban ghi tren table
 * */
function rowOnDbClick() {
    //Hien thi form chi tiet
    $(".dialog-closebtn").click(function () {
        $(".dialog").addClass('dialog-hide');
    })

    $("#btn-exit").click(function () {
        $(".dialog").addClass('dialog-hide');
    })
}