$(function () {

	//①
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/common/js/data.json',
		success: function (data) {

			for (var i in data) {
				//$('#group').append(data[i].group);
				//var grp = data[i].group;

				$('.table > caption')
					.append('<span class="isHidden tableText tableText--'+ data[i].group + '">' + data[i].group + '</span>');

				for (var j in data[i].member) {
					$('#output').append(
						'<tr class="isHidden tr tr--'+ data[i].group +'">'
						+ '<td>' + data[i].member[j].id + '</td>'
						+ '<td>' + data[i].member[j].name + '</td>'
						+ '<td>' + data[i].member[j].age + '</td>'
						+ '<td>' + data[i].member[j].team + '</td>'
						+ '</tr>'
					);
				}
			}

			function changeTable() {
				//②
		
				//変数
				var $tblText = $('.tableTitle > .tableText');
				var $tr = $('#output > .tr')
		
				//表タイトル削除
				function rmvTitle() {
					$tblText.each(function () {
						$(this).addClass('isHidden');
					});
				}
				//表の列削除
				function rmvTr() {
					$tr.each(function () {
						$(this).addClass('isHidden');
					});
				}
		
				//初期表示
				//A表タイトル表示
				$('.tableTitle > .tableText--A').each(function () {
					$(this).removeClass('isHidden');
				});
				//A表データを表示
				$('#output > .tr--A').each(function () {
					$(this).removeClass('isHidden');
				});
		
				//ボタンBを押す(A Cを非表示)
				$('.button--B').on('click', function () {
					//表タイトルをBに変更
					// rmvTitle();
					// $('.tableText--B').removeClass('isHidden');
					// //Bのデータを表示
					// rmvTr();
					// $('.tr--B').removeClass('isHidden');

					//表タイトル、表データを全非表示
					rmvTitle();
					rmvTr();
					//Bのデータを表示
					$('.tableText--B, .tr--B').removeClass('isHidden');

				});
		
				//ボタンCを押す(A Bを非表示)
				$('.button--C').on('click', function () {
					//表タイトルをBに変更
					rmvTitle();
					$('.tableText--C').removeClass('isHidden');
					//Cのデータを表示
					rmvTr();
					$('.tr--C').removeClass('isHidden');
				});
		
				//ボタンAを押す(B Cを非表示)
				$('.button--A').on('click', function () {
					//表タイトルをAに変更
					rmvTitle();
					$('.tableText--A').removeClass('isHidden');
					//Aの表データを表示
					rmvTr();
					$('.tr--A').removeClass('isHidden');
				});
			}
			changeTable();

		}
	});

}); //end
