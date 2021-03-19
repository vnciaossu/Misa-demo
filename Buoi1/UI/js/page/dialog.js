$(".dialog").ready(function () {
    addEvent();
})

function addEvent() {
    $(".btn-addcustomer").click(function () {
        $(".dialog").removeClass('dialog-hide');
    })

    $(".dialog-closebtn").click(function () {
        $(".dialog").addClass('dialog-hide');
    })

    $("#btn-save").click(function () {
        postData();
    })
}

function postData() {
    var customerCode = $("#customerCode").val();
    var fullName = $("#fullName").val();
    var phoneNumber = $("#phoneNumber").val();
    var memberCardCode = $("#memberCardCode").val();
    var customerGroupName = $("#customerGroupName").val()
    var dateOfBirth = $("#dateOfBirth").val();
    var gender = $("input[name='gender']:checked").val();
    var email = $("#email").val();
    var phoneNumber = $("#phoneNumber").val();
    var companyName = $("#companyName").val();
    var taxCode = $("#taxCode").val();
    var address = $("#address").val();
    var genderName = null;

    if (gender == 0) {
        genderName = "Khác";
    } else if (gender == 1) {
        genderName = "Nam";
    } else if (gender == 2) {
        genderName = "Nữ";
    }

    var newCustomer = {
        "CustomerCode": customerCode,
        "FullName": fullName,
        "Gender": gender,
        "Address": address,
        "DateOfBirth": dateOfBirth,
        "Email": email,
        "PhoneNumber": phoneNumber,
        "CustomerGroupId": "00000000-0000-0000-0000-000000000000",
        "DebitAmount": null,
        "MemberCardCode": memberCardCode,
        "CompanyName": companyName,
        "CompanyTaxCode": taxCode,
        "IsStopFollow": false,
        "CustomerGroupName": customerGroupName,
        "GenderName": genderName,
        "MISAEntityState": 0
    }

    $.ajax({
        method: "POST",
        url: "http://api.manhnv.net/api/customers",
        data: JSON.stringify(newCustomer),
        async: false,
        contentType: "application/json"
    }).done(function (res) {
        alert("Thêm thành công");
    }).fail(function (res) {
        alert("Thêm không thành công");
    })
}
