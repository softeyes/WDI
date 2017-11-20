var results = $.get('https://jsonplaceholder.typicode.com/users').done(process_results).fail(blowup)

function create_td(inner_text){
	var tdata = document.createElement('td');
	var inner_text = document.createTextNode(inner_text);
	tdata.appendChild(inner_text);
	return tdata;
}

function process_results(data){
	console.log(data)
	// from here on, we know what we're doing!!??
	// create <table> element
	var table = document.createElement('table');
	
	for(var counter = 0; counter < data.length; counter++){
		console.log('a person is here');
		var user = data[counter]
		var trow = document.createElement('tr');

		trow.appendChild(create_td(user.email));
		trow.appendChild(create_td(user.username));
		trow.appendChild(create_td(user.phone));
		trow.appendChild(create_td(user.address.street));

		var tdata = document.createElement('td');
		var button = document.createElement('button');
		// set button attribute of id to be user.id
		button.addEventListener('click', edit_me);
		var text = document.createTextNode('edit');
		button.appendChild(text);
		tdata.appendChild(button);
		trow.appendChild(tdata);

		var tdata = document.createElement('td');
		var button = document.createElement('button');
		var text = document.createTextNode('delete');
		button.appendChild(text);
		tdata.appendChild(button);
		trow.appendChild(tdata);

		table.appendChild(trow);
	}
		var users = document.querySelector("#users");
		users.appendChild(table)
		console.log(table)

	}

	function blowup(reason){
	console.log(reason)
	}

	function edit_me(){
		console.log(this);
	}
	
// https://jsonplaceholder.typicode.com/users