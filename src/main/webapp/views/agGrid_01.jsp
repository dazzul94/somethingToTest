<%@ page import="java.util.Date" %>
<%@ page language="java"  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%
	String contextPath = request.getContextPath();
	/* Object originalUri = request.getAttribute("javax.servlet.forward.request_uri");
	String screenId = null;
	if(originalUri != null) {
		int beginIndex = ((String)originalUri).lastIndexOf("/");
		int endIndex = ((String)originalUri).lastIndexOf(".");
		screenId = ((String)originalUri).substring(beginIndex + 1, endIndex);
	} */
	// JSP code
	long ts = (new Date()).getTime(); // Used to prevent JS/CSS Cashing
%>
<!DOCTYPE HTML> 
<html lang="ko">
<head>
	<meta charset="uft-8">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="X-UA-Compatible" content="IE-Edge"/>
	<title>Home</title>
	<meta http-equiv="Content-type" content="text/html;charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/ui.jqgrid.css?<%=ts%>"/>
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/jquery-ui.css?"<%=ts%>/>
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/multi-select.css?<%=ts%>"/>
	
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/ui.jqgrid-bootstrap.css?<%=ts%>"/>
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/ui.jqgrid-bootstrap4.css?<%=ts%>"/>
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/jqGrid/ui.jqgrid-bootstrap-ui.css?<%=ts%>"/>
	
	<script type="text/javascript" src="<%=contextPath%>/js/jqGrid/jquery-1.11.0.min.js?<%=ts%>"></script>
	<script type="text/javascript" src="<%=contextPath%>/js/jqGrid/grid.locale-kr.js?<%=ts%>"></script>
	<script type="text/javascript" src="<%=contextPath%>/js/jqGrid/jquery.jqGrid.min.js?<%=ts%>"></script>
	<script type="text/javascript" src="<%=contextPath%>/js/jqGrid/jquery-ui.js?<%=ts%>"></script>
	
  	<script src="https://unpkg.com/ag-grid/dist/ag-grid.min.js"></script>
	
	<script type="text/javascript" src="<%=contextPath%>/js/agGrid_01.js?<%=ts%>"></script>
</head>
<body>
<div id="container">
	<h2>AG GRID 기본 예제</h2>
	<div class="grid-wrapper">
	    <div style="width: 100%; height:580px" id="myGrid" class="ag-grid-div ag-theme-balham ag-basic"></div>
	</div>
</div>
</body>
</html>

