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
	<link rel="stylesheet" type="text/css" href="<%=contextPath%>/css/summerNote.css?<%=ts%>"/>
	
	<!-- include libraries(jQuery, bootstrap) -->
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<!-- include summernote css/js -->
	<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.16/dist/summernote.min.css" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.16/dist/summernote.min.js"></script>
	<script type="text/javascript" src="<%=contextPath%>/js/summerNote.js?<%=ts%>"></script>
</head>
<body>
	<div id="summernote">Hello Summernote</div>
</body>
</html>

