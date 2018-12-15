var ExcelTest=function () {
    this.getValue = function (cellNumber) {
        browser.ignoreSynchronization = true;
        var XLSX = require('xlsx');
        var workbook = XLSX.readFile('test.xlsx');
        var first_sheet_name = workbook.SheetNames[0];
        //var first_sheet_name = "logintest";
        var address_of_cell = cellNumber;
        var abc = "";
        var worksheet = workbook.Sheets[first_sheet_name];
        var desired_cell = worksheet[address_of_cell];
        var desired_value = desired_cell.v;
        return desired_value;
    };
};
module.exports = new ExcelTest();