$(document).ready(function () {
    $("table#tbListCustomer tbody").html('');
    loadData();

    $("#btn-refresh").click(function () {
        loadData();
    })

})

function loadData() {
    //lấy dữ liệu từ api về

    var data = getData();
    buildDataTableHTML(data);
    //xử lý data
}

/*
* Ham lay data
*/
function getData() {
    var customers = null;
    $.ajax({
        method: "GET",
        url: "http://api.manhnv.net/api/customers",
        data: null,
        async: false,
        contentType: "application/json"
    }).done(function (response) {
        customers = response;
    }).fail(function (response) {
        alert("Không thể lấy dữ liệu từ Api");
    })
    return customers;
}

function buildDataTableHTML(data) {
    $("table#tbListCustomer tbody").html('');
    $.each(data, function (index, customer) {
        var dateOfBirth = customer.DateOfBirth;
        var dateFormat = formatDateDDMMYY(dateOfBirth);
        var demitMoney = '401545321321546';
        var money = formatMoney(demitMoney);
        var sex = formatSex(customer.Gender);
        var trHTML = `<tr>
                        <td>${customer.CustomerCode}</td>
                        <td>${customer.FullName}</td>
                        <td>${sex}</td>
                        <td>${dateFormat}</td>
                        <td>${customer.CustomerGroupName}</td>
                        <td>${customer.PhoneNumber}</td>
                        <td>${customer.Email}</td>
                        <td>${money}</td>
                        <td><input type="checkbox" /?</td>
                    </tr>`;
        $("table#tbListCustomer tbody").append(trHTML);
    })
}

function formatDateDDMMYY(date) {
    if (date == null) {
        return "(Không có)";
    }
    var newDate = new Date(date);
    var dateString = newDate.getDate();
    var monthString = newDate.getMonth() + 1;
    var yearString = newDate.getFullYear();
    return `${dateString}/${monthString}/${yearString}`;
}

function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + " VND";
}

function formatSex(sex) {
    if (sex == null || sex == "") {
        return "(Không có)";
    } else if (sex == 2) {
        return "Nữ";
    } else if (sex == 1) {
        return "Nam";
    }
}