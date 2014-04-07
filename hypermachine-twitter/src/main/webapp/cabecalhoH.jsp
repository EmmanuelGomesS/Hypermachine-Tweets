<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<fmt:setLocale value="${locale}"/>
<!DOCTYPE html">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	    <title>Hypermachine Tweets</title>
		<link href="css/tema.css" rel="stylesheet">
	</head>

<body>
<script src="js/jquery1.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js"></script>
<div class="wrapper">


<div id="head-top">	
<div class="navbar navbar-inverse" role="navigation">
		
	  <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"></button>
		<a class="navbar-brand" href="<c:url value="/"/>">Hypermachine Tweets</a>
	  </div>
		
	<div class="collapse navbar-collapse navbar-ex1-collapse">
	  	<ul class="nav navbar-nav">
		   <li><a href="<c:url value="/"/>">Home</a></li>
		  <li><a href="<c:url value="/listavideos"/>">Vídeos</a></li>

		  <li class="dropdown">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown">Músicas <b class="caret"></b></a>
			<ul class="dropdown-menu">
			  <li><a href="<c:url value="/listamusicas"/>">Diversas</a></li>
							  <li><a href="<c:url value="/rock"/>">Rock</a></li>
							  <li><a href="<c:url value="/pop"/>">Pop</a></li>
							  <li><a href="<c:url value="/dance"/>">Dance</a></li>
							  <li><a href="<c:url value="/forro"/>">Forro</a></li>
			</ul>
		  </li>
		   
		</ul>
		<form class="navbar-form navbar-right visible-lg" role="search" action="<c:url value="/busca"/>" name="busca" method="POST">
			<div class="form-group">
			<input type="search" class="form-control" placeholder="Busca" name="search">
			 </div>
			 <button type="submit" class="btn btn-primary">Buscar</button>
		</form>

	</div>


</div>
