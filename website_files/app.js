//list of products
const productData = [
	{
		name: "3 wood Cobra",
		type: "Grip",
		price: "79€",
		photo: "website_files/img/3woodCobra/3woodCobra.jpeg",
		description: "Men’s Cobra X/ST13 degrees, graphite stiff shaft. Condition Highly used."
	  },
	  {
		name: "5 wood Cobra",
		type: "Club",
		price: "60€",
		photo: "website_files/img/5woodCobra/5woodCobra.jpeg",
		description: "Men’s Cobra S9-1 5 wood,graphite stiff shaft. Condition Highly used."
	  },
	  {
		name: "7 wood La Jolla",
		type: "Club",
		price: "49€",
		photo: "website_files/img/7woodLaJolla/7woodLaJolla.jpg",
		description: "Men’s La Jolla 7 wood, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "5 Wood TaylorMade",
		type: "Club",
		price: "29€",
		photo: "website_files/img/5WoodTaylormade/5WoodTaylormade.jpeg",
		description: "Men’s Taylormade R5 5 wood, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "5 Wood Adam",
		type: "Club",
		price: "25€",
		photo: "website_files/img/5woodAdam/5woodAdam.jpeg",
		description: "Men’s Adam’s Tight Lies 5 wood, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "XXIO Irons Set",
		type: "Club",
		price: "790€",
		photo: "website_files/img/xxioIronsSet/xxioIronsSet.jpeg",
		description: "Men’s XXIO irons 5-PW, graphite regular shafts.  Condition Excellent."
	  },
	  {
		name: "3 Wood Titlest 917F3",
		type: "Club",
		price: "90€",
		photo: "website_files/img/3woodTitlest917F3/3woodTitlest917F3.jpeg",
		description: "Men’s Titleist 917F3 13.5 degree wood graphite stiff shaft. Condition Fair."
	  },
	  {
		name: "3 Wood Callaway Epic",
		type: "Club",
		price: "230€",
		photo: "website_files/img/3woodCallawayEpic/3woodCallawayEpic.jpeg",
		description: "Men’s Callaway Epic 3 wood, graphite regular shaft. Condition Excellent."
	  },
	  {
		name: "3 Wood Titlest TSi2",
		type: "Club",
		price: "200€",
		photo: "website_files/img/3woodTitlestTSi2/3woodTitlestTSi2.jpeg",
		description: "Men’s Titleist TSi2 3 wood, graphite regular shaft. Condition Excellent."
	  },
	  {
		name: "3 Wood Callaway Mavrik",
		type: "Club",
		price: "150€",
		photo: "website_files/img/3woodCallawayMavrik/3woodCallawayMavrik.jpeg",
		description: "Men’s Callaway Mavrik 3 wood, graphite regular shaft. Condition Good."
	  },
	  {
		name: "Driver Cobra",
		type: "Club",
		price: "49€",
		photo: "website_files/img/driverCobra/driverCobra.jpeg",
		description: "Men’s Cobra Driver 9 degree, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "Driver TaylorMade",
		type: "Club",
		price: "89€",
		photo: "website_files/img/driverTaylorMade/driverTaylorMade.jpeg",
		description: "Men’s Taylormade Driver 9.5 degree, graphite regular shaft. Condition Fair."
	  },
	  {
		name: "Driver Callaway",
		type: "Club",
		price: "49€",
		photo: "website_files/img/12driverCallaway/12driverCallaway.jpeg",
		description: "Ladies Callaway Driver 12 degree, graphite ladies shaft. Condition Highly used."
	  },
	  {
		name: "7 Wood Callaway",
		type: "Club",
		price: "45€",
		photo: "website_files/img/7woodCallaway/7woodCallaway.jpeg",
		description: "Ladies Callaway Driver 12 degree, graphite ladies shaft. Condition Highly used."
	  },
	  {
		name: "5 Wood Callaway",
		type: "Club",
		price: "25€",
		photo: "website_files/img/5woodCallaway/5woodCallaway.jpeg",
		description: "Left Hand Ladies Callaway 5 wood graphite ladies shaft. Condition Highly used."
	  },
	  {
		name: "Driver Callaway",
		type: "Club",
		price: "70€",
		photo: "website_files/img/10DriverCallaway/10DriverCallaway.jpeg",
		description: "Men’s Callaway Driver 10 degree, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "Driver Wilson",
		type: "Club",
		price: "49€",
		photo: "website_files/img/driverWillson/driverWillson.jpeg",
		description: "Men’s Wilson Driver 12 degrees, graphite regular shaft. Condition Fair."
	  },
	  {
		name: "Driver Callaway",
		type: "Club",
		price: "49€",
		photo: "website_files/img/11driverCallaway/11driverCallaway.jpeg",
		description: "Left Hand Ladies Driver 11 degree, graphite ladies shaft. Condition Highly used."
	  },
	  {
		name: "Driver TaylorMade",
		type: "Club",
		price: "49€",
		photo: "website_files/img/10.5driverTaylorMade/10.5driverTaylorMade.jpeg",
		description: "Men’s Driver 10.5 degrees, graphite regular shaft. Condition Highly used."
	  },
	  {
		name: "Hybrid TaylorMade",
		type: "Club",
		price: "125€",
		photo: "website_files/img/hybridTaylorMade/hybridTaylorMade.jpeg",
		description: "Men’s Taylormade hybrid. 24 degrees. graphite stiff shaft. Condition Excellent."
	  },
	  {
		name: "Hybrid Callaway FT",
		type: "Club",
		price: "50€",
		photo: "website_files/img/hybridCallawayFT/hybridCallawayFT.jpeg",
		description: "Men’s Callaway hybrid. 26 degree. graphite stiff shaft. Condition Highly used."
	  },
	  {
		name: "Hybrid Ping G425",
		type: "Club",
		price: "174€",
		photo: "website_files/img/hybridPingG425/hybridPingG425.jpeg",
		description: "Men’s Ping G425 hybrid 19 degree. Graphite Regular shaft. Condition Good."
	  },
	  {
		name: "Callaway Big Bertha set",
		type: "Club",
		price: "70€",
		photo: "website_files/img/callawayBigBertha/callawayBigBertha.jpeg",
		description: "Men’s Callaway Big Bertha righthand irons 4-PW. Condition Highly used."
	  },
	  {
		name: "Callaway Ft i.brid set",
		type: "Club",
		price: "299€",
		photo: "website_files/img/CallawayFTi.brid/CallawayFTi.brid.jpeg",
		description: "Men’s righthand irons 5-SW. Graphite Regular Shafts. Condition Highly used."
	  }
  ];
  
  //function to create the box where the product will be displayed. It will create a new box for every product
  function productTemplate(product) {
	return `
	  <div class="filter product float-child ${product.type}">
			 <div class="photo"> 
			  <img class="product-photo" src="${product.photo}"> 
		  </div>
			 <h2 class="product-name">${product.name} 
			 <span class="type"><br>(${product.type})</span></h2>
		  <p class="product-description">${product.description}</p>
		  <h4 class="product-price">price: ${product.price}</h4>
	   </div>
	`
  }
  //add all of the products to the template
  document.getElementById("template").innerHTML = `${productData.map(productTemplate).join("")}`;
  
  //calls the filterSelection
  filterSelection("all")
  function filterSelection(selected) {
		var tag, time;
		//gets the HTML divs that can be filtered.
		tag = document.getElementsByClassName("filter");
	  //output all of the products
		if (selected == "all") {
		  selected = "";
	  }
	  //for all of the number of divs
		for (time = 0; time < tag.length; time++) {
			  //call delClass and filter it out
			  delClass(tag[time], "display");
			  if (tag[time].className.indexOf(selected) > -1) {
				  //call insertClass and filter it in
				  insertClass(tag[time], "display");
	  }
	}
  }
  
  //inserts the class to make it visible
  function insertClass(element, name) {
	var time, part1, part2;
  //splits all of the classes and puts it into an array
	part1 = element.className.split(" ");
	part2 = name.split(" ");
	for (time = 0; time < part2.length; time++) {
	  if (part1.indexOf(part2[time]) == -1) {
		  //add the class back to be shown
		  element.className += " " + part2[time];
	  }
	}
  }
  
  //deletes the classes that do not want to be displayed
  function delClass(element, name) {
	var time, part1, part2;
  //splits all of the classes and puts it into an array
	part1 = element.className.split(" ");
	part2 = name.split(" ");
	for (time = 0; time < part2.length; time++) {
	  if (part1.indexOf(part2[time]) > -1) {
		  //removes the "display" class 
		part1.splice(part1.indexOf(part2[time]), 1); 
	  }
	}
	element.className = part1.join(" ");
  }
