var call_host = $(location).attr('origin')
var context_path = '';

$(document).ready(function() {
	mainHandler.init();
});

var mainHandler = {
    init: function() {
    	resultHandler.init();
    }
}

var resultHandler = {
	init: function() {
		this.loadAgGrid();
	},
	loadAgGrid: function() {
	    // div id 설정
	    var gridDiv = document.querySelector('#myGrid'); 
	    // ag-grid 생성     
	    new agGrid.Grid(gridDiv, gridOptions); 
	 
	    // 데이터 받아오기..
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json');
	    httpRequest.send();
	    httpRequest.onreadystatechange = function() {
	        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
	            var httpResult = JSON.parse(httpRequest.responseText);
	            // 데이터 삽입
	            console.log(httpResult);
	            gridOptions.api.setRowData(httpResult); 
	        }
	    };
	}
}

//컬럼 정보 set
var columnDefs = [
    {headerName:"Athlete", field: "athlete", width: 150, minWidth:120, pinned:'left', suppressSizeToFit: true, suppressMenu: true, sort: 'asc'},
    {headerName:"Age", field: "age", width: 90, minWidth: 50, maxWidth: 100, pinned:'left', suppressMenu: true, suppressSorting : true},
    {headerName:"Country", field: "country", width: 120},
    {headerName:"Year", field: "year", width: 90},
    {headerName:"Date", field: "date", width: 110},
    {headerName:"Sport", field: "sport", width: 110},
    {headerName:"Gold Medal", field: "gold", width: 100},
    {headerName:"Silver Medal", field: "silver", width: 100},
    {headerName:"Bronze Medal", field: "bronze", width: 100},
    {headerName:"Total", field: "total", width: 100}
];

// 그리드 옵션
var gridOptions = {
    defaultColDef: {
        sortable: true,
        resizable: true
    },
    debug: true,
    columnDefs: columnDefs,
    rowData: null,
    onGridReady: function() {
        gridOptions.api.addGlobalListener(function(type, event) {
            if (type.indexOf('column') >= 0) {
                console.log('Got column event: ', event);
            }
        });
    }
};

//화면 넓이에 따라 그리드 넓이 조절
$(window).resize(function() {
	
});