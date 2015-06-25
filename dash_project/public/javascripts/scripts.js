//create variables//

var friends = [
  'Kris Jenner',
  'Kourtney Kardashian',
  'Kim Kardashian West',
  'Khloe Kardashian',
  'Rob Kardashian',
  'North West',

];

var frenemies = [
	'Bruce Jenner',
	'Kendall Jenner',
	'Kylie Jenner',
	'Scott Disick'
	'Mason Disick',
	'Penelope Disick',
	'Reign Ashton Disick'
];

//Create the CRUD functions//
//var friends;
// var frenemies;

function seeAllCategories() {

		$seeAllCategories.on("click", function(seeAllCategories) {

    	$.ajax({
        url :'/categories',
        type: 'GET',
        }).done(function(data){
        	console.log(data);

    })
};
seeAllCategories()



function createNewCategories() {
		

	$('button').on('click', function(){
 		createNewContacts();

		$.ajax({
		url:'/categories',
		type: 'POST'
		}).done(function(date){
			console.log(data)
		})

};
createNewCategories()


function updateCategories(id){
	$.ajax({
		url:'/categories',
		type: 'PUT'
		}),done(function(data) {
				console.log(data)
		})
};

function deleteCategories(id) {
  $.ajax({
    url: '/categories' + id ,
    method: "DELETE",
  }).done(function() {
    ul.find('#' + id).remove();
  })
};

///////////////////////////

function seeAllContacts() {
  $.ajax({
    url:'/contacts',
    type: 'GET',
  }).done(function(data) {
  		console.log(data)

  });

}
seeAllContacts();


function createNewContacts() {

$submitButton.on('click', function(){

	debugger

	$.ajax({
		url:'/contacts/',
		type: 'POST',
		}).done(function(data) {
			console.log(data)
	});

};


function updateContacts(id) {
		$.ajax({
			url:'/contacts/',
			type: 'PUT',
		}).done(function(data) {
			console.log(data)

		});
};


function deleteContacts(id) {
		$.ajax({
			url:'/contacts/' + id,
			type: 'DELETE'
		}).done(function(data) {
			console.log(data)
		});
		
};
deleteContacts();



// $('button.YOURCLASSNAME').on('click', function(){
// YOURFUNCTION();
// })

// // <button class="all-contacts">All contacts</button>
// // then the click event
// // $('button.all-contacts').on('click', function(){
// // seeAllContacts()


























































 


























































































