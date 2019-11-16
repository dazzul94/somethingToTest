//화면 넓이에 따라 그리드 넓이 조절
$(window).resize(function() {

	$("#jqGrid").setGridWidth($(this).width() * .100);

});

$(document).ready(function() {
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
});

function goSearch() {
	var jsonObj = {};
	if($("#selectId").val() != "C") {
		jsonObj.serviceImplYn = $("#selectId").val();
	}
	alert(JSON.stringify(jsonObj));
}