describe("Test automation of a banking app" ,function(){
	it("validate customer login test",function(){
		
	browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	element(By.buttonText("Customer Login")).click();
	expect(browser.getTitle()).toContain("Protractor practice");
	
	element.all(by.css("#userSelect option")).then(function(items){
		//printing values from dropdown list
		console.log("-----Printing values from dropdwon list------------")
		console.log("Total values in dropdown are: "+items.length);
		
		for(i=0;i<items.length;i++){
		items[i].getText().then(function(text)	{
			console.log(text);
		});
			
			
			
		}
		console.log("---------------Printing values attributes from dropdown list------------------------------")
		for(i=0;i<items.length;i++){
			items[i].getAttribute("value").then(function(text)	{
				console.log(text);
			});
				
				
				
			}
		element(by.model("custId")).element(by.css("[value='2']")).click();
		
		element(by.buttonText("Login")).click();
		/*element(by.binding("user")).getText().then(function(text){
			console.log(text);
		}); */
		
		expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
		browser.sleep(3000);
		
	});
		
		
		
		
		
		
		
	});
	
});



