var call_host = $(location).attr('origin')
var context_path = '';

$(document).ready(function() {
	mainHandler.init();
	initInputArea.init();
	btnEventHandler.init();
});

var mainHandler = {
    init: function() {
    	this.initDatePicker();
    	this.setAttribute();
    },
	initDatePicker: function() {
		$("#fromDate, #toDate").datepicker({
			dateFormat: "yy.mm.dd",
			showOn: "button",
			buttonImage: context_path + "/img/ico_calendar.png",
			buttonImageOnly: true,
			buttonText: "Select date",
			dayNames: ['월', '화', '수', '목', '금', '토', '일'],
			dayNamesMin: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			monthNames: ['.01', '.02', '.03', '.04', '.05', '.06', '.07', '.08', '.09', '.10','.11','.12'],
			showMonthAfterYear: true,
			maxDate: "+0D"
		});
		$("#fromDate").datepicker("setDate", -14);
		$("#toDate").datepicker("setDate", new Date());
	},
	setAttribute: function() {
		$("#fromDate").attr("maxlength", "10");
		$("#toDate").attr("maxlength", "10");
	}
}

var initInputArea = {
	init: function() {
		this.searchAreaInit();
	},
	searchAreaInit: function() {
		$("#searchVal").val('');
	}
}

var btnEventHandler = {
	init: function() {
		this.searchButtonInit();
		this.excelButtonInit();
	},
	searchButtonInit: function() {
		$("#btn_search").on("click", function() {
			resultHandler.bindData(null);
			var params = {
				"selectType": $("#selectType option:selected").val(),
				"searchVal" : $("#searchVal").val(),
				"fromDate"  : $("#fromDate").val().replace(/\./g,''), 
				"toDate"    : $("#toDate").val().replace(/\./g,'') 
			};
			alert(JSON.stringify(params));
			// get data
			$.ajax({
				url: "getData",
				async: true,
				data: params,
				method: 'POST',
				success: function(data) {
					// data binding to grid and high chart
					resultHandler.bindData(data);
				},
				beforeSend: function() {
					
				},
				complete: function() {
					
				},
				error: function() {
					alert("error");
				}
			});
		})
	},
	excelButtonInit: function() {
		$("#btn_excel").on("click", function() {
			alert("btn_excel click");
		});
	}
}
var resultHandler = {
	bindData: function(data) {
		gridHandler.drawGrid(data);
	}
}
var gridHandler = {
	drawGrid: function() {
		var column_names = ['아이디','이름', '랭크', '레벨'];
		
		$("#jqGrid").jqGrid({
			url: "jqgridStartMain.do",
			datatype: "local",
			colNames: column_names,
			colModel: [
				{name: 'id', index:'id', width:200, key:true, align:'center'},
				{name: 'name', index:'name', width:200, align:'center'},
				{name: 'rank', index:'rank', width:200, align:'center'},
				{name: 'level', index:'level', width:200, align:'center'}
			],
			height: 480,
			rowNum: 10,
			rowList: [10, 20, 30],
			pager: '#jqGridPager',
			rownumbers: true,
			ondbClickRow: function(rowId, iRow, iCol, e) {
				if(iCol == 1) {
					alert(rowId + "째 줄입니다.")
				}
			},
			viewrecords: true,
			autowidth:true,
			caption: "실습용 테이블"
		});
	}
}
//화면 넓이에 따라 그리드 넓이 조절
$(window).resize(function() {

	$("#jqGrid").setGridWidth($(this).width() * .100);

});