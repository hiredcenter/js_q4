$(function() {
	//課題1
	$.ajax({
		type: 'GET',
		url: './common/js/data.json',
		'dataType': 'json',
	}).done(function(data) {
		$.each(data, function(i, group) {
			var compiled = _.template($('#lodashTemplateData').html());
			//表タイトルの要素追加
			$('.tbl > caption').append('<span class="isHidden tblText tblText-' + data[i].group + '">' + data[i].group + '</span>');
			//$('.tbl > thead').after('<tbody class="tby tby-' + data[i].group + '">');
			//var h = '<tbody class="tby tby-' + data[i].group + '">';
			var h = '<tbody class="tby" id=tby-' + data[i].group + '">';


			$.each(data, function (j, member) {
				//課題4 underscore.jsのテンプレート用データ
						h += '<tr class="tr tr--' + data[i].group + '">'
							+ '<td>' + data[i].member[j].id + '</td>'
							+ '<td>' + data[i].member[j].name + '</td>'
							+ '<td>' + data[i].member[j].age + '</td>'
							+ '<td>' + data[i].member[j].team + '</td>'
							+ '</tr>';
				}


				// $.each(data, function (j, member) {
				// 	$('#output').append(
				// 		//課題4 underscore.jsのテンプレート用データ
				// 		compiled({
				// 			"group": 'class="isHidden tr tr-' + data[i].group + '"',
				// 			"id": data[i].member[j].id,
				// 			"name": data[i].member[j].name,
				// 			"age": data[i].member[j].age,
				// 			"team": data[i].member[j].team,
				// 		})

				// '<tr class="isHidden tr tr--' + data[i].group + '">'
				// + '<td>' + data[i].member[j].id + '</td>'
				// + '<td>' + data[i].member[j].name + '</td>'
				// + '<td>' + data[i].member[j].age + '</td>'
				// + '<td>' + data[i].member[j].team + '</td>'
				// + '</tr>';
			
			//}); //each２個目(compiledあり)
			); //each２個目
			h += '</tbody>';
			//$('.tby').append(h);
			//$('.tbl > thead').after(h);
			$('#output').after(h);


		});//each１個目
		});//done

		//課題2
		function changeTbl() {
			var $tblText = $('.tblTitle > .tblText');
			//var $tr = $('#output > .tr');
			var $tby = $('tbody');

			//表タイトル・列削除
			function rmvTitleTr() {
				$tblText.each(function () {
					$(this).addClass('isHidden');
				});
				// $tr.each(function () {
				// 	$(this).addClass('isHidden');
				// });
				$tby.each(function () {
					$(this).addClass('isHidden');
				});
			}

			//初期表示設定(A表示)
			$('.tblText-A').removeClass('isHidden');
			//$('tbody#tby-A').removeClass('isHidden');
			

			//ボタンBを押す(A Cを非表示)
			$('.btn-B').on('click', function () {
				//表タイトル・表データを全非表示→Bのデータを表示
				rmvTitleTr();
				$('.tblText-B, #tby-B').removeClass('isHidden');
			});

			//ボタンCを押す(A Bを非表示)
			$('.btn-C').on('click', function () {
				//表タイトル・表データを全非表示→Cのデータを表示
				rmvTitleTr();
				$('.tblText-C, #tby-C').removeClass('isHidden');
			});

			//ボタンAを押す(B Cを非表示)
			$('.btn-A').on('click', function () {
				//表タイトル・表データを全非表示→Aのデータを表示
				rmvTitleTr();
				$('.tblText-A, #tby-A').removeClass('isHidden');
			});

			//一般化
			// $('.btn').on('click', function () {
			// 	//表タイトル・表データを全非表示→Aのデータを表示
			// 	rmvTitleTr();
			// 	//$('.tblText-A, .tr-A').removeClass('isHidden');
			// 	//$(this).eq()

		}
		changeTbl();

		//課題3
		$('.acdIcon').on('click', function() {
			$(this).toggleClass('is-active');
			$(this).next().toggleClass('is-hidden');
		});

	//});
}); //end

					//for(in)
						//var(h)=json吐き出す中身
							//<dt></dt>
					//<dd>
						//<ul>
							//for(in)
							//h=<li>
							//</li>
							//forここまで
					
							//h+=//</ul>
							//</dd>
					//$(dl#wrap).append(h)
