describe("Validating the table", function () {
  browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
  it("validate table", function () {
    console.log("Printing the Entire table data in new line")
    element.all(by.repeater('column in columns')).then(function (rows) {
      var rowNum = rows.length;
      for (var i = 0; i < rowNum; i++) {
        rows[i].all(by.tagName('td')).then(function (columns) {
          var noOfItems = columns.length
          for (var i = 0; i < noOfItems; i++) {
            columns[i].getText().then(function (text) {
              console.log(text + "   " + i);
            });
          }
        })
      }
      // rows.forEach(function (row) {
      // row.all(by.tagName('td')).then(function (columns) {
      //   var noOfItems = columns.length
      //   for (var i = 0; i < noOfItems; i++) {
      //     columns[i].getText().then(function (text) {
      //       console.log(text + "   " + i);
      //     });
      //   }
      // })
      //})
    })
  });
});
