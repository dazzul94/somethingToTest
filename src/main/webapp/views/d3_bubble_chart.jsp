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
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,600,200italic,600italic&subset=latin,vietnamese" rel='stylesheet' type='text/css'>

  <script src="https://phuonghuynh.github.io/js/bower_components/jquery/dist/jquery.min.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/d3/d3.min.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/d3-transform/src/d3-transform.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/cafej/src/extarray.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/cafej/src/misc.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/cafej/src/micro-observer.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/microplugin/src/microplugin.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/bubble-chart/src/bubble-chart.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/bubble-chart/src/plugins/central-click/central-click.js"></script>
  <script src="https://phuonghuynh.github.io/js/bower_components/bubble-chart/src/plugins/lines/lines.js"></script>	
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/d3_bubble_chart.css?<%=ts%>"/>


	<script type="text/javascript" src="<%=contextPath%>/js/d3_bubble_chart.js?<%=ts%>"></script>
</head>
<body style="background: #000000">
	<div class="bubbleChart"></div>
</body>
</html>

