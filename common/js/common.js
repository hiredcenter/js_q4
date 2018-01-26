$(function () {
	// var data = [
	// 	{ id: '01', name: '田中', age: 20, team: '赤' },
	// 	{ id: '02', name: '佐藤', age: 25, team: '白' },
	// 	{ id: '03', name: '鈴木', age: 20, team: '赤' },
	// 	{ id: '04', name: '山田', age: 25, team: '赤' },
	// 	{ id: '05', name: '鈴木', age: 18, team: '白' }
	// ]

	// $.getJSON("data.json", function(data) {
	// 	for (var i in data) {
	// 		$('#output').append(
	// 			'<tr>'
	// 			+'<td>' + data[i].id + '</td>'
	// 			+ '<td>' + data[i].name + '</td>'
	// 			+ '<td>' + data[i].age + '</td>'
	// 			+ '<td>' + data[i].team + '</td>'
	// 			+'</tr>'
	// 		);
	// 	}
	// });


	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/common/js/data.json',
		success: function (data) {
			for (var i in data) {
				$('#output').append(
					'<tr>'
					+'<td>' + data[i].id + '</td>'
					+ '<td>' + data[i].name + '</td>'
					+ '<td>' + data[i].age + '</td>'
					+ '<td>' + data[i].team + '</td>'
					+'</tr>'
				);
			}
		}
	});
}); //end