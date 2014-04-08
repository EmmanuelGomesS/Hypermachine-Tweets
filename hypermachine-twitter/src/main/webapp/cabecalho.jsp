<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<fmt:setLocale value="${locale}"/>
<!DOCTYPE html">
<html>
	<head>
		<link href="css/tema.css" rel="stylesheet">
		<title>Hypermachine Tweets</title>
		<script type="text/javascript" src="js/all.08550af.js"></script> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
	<script src="js/all.114703d6e.js" type="text/javascript"></script>
	
	<script type="text/javascript" src="js/jquery.waitforimages.js"></script> 
	<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>

	
	
    <script src="js/jquery1.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js"></script>
	
	<script>
 $('.carousel').carousel() 
</script>
  <script type="text/javascript">
$(function(){
 
    // Dialog
    $('.dialog').dialog({
        autoOpen: false,
        width: 500,
        height: 300,
        buttons: {
        "Ok": function() {
        $(this).dialog("close");
        },
        "Cancel": function() {
        $(this).dialog("close");
        }
        }
    });
 
    $('.dialog_link').click(function(){
 
    $('.dialog').dialog('close');
 
    var id_link = $(this).attr('id');
    var index = id_link.split('_');
 
    $('#txt_'+index[1]).dialog('open');
 
    return false;
 
    });
 
    $('.dialog_link, ul.icons li').hover(
    function() { $(this).addClass('ui-state-hover'); },
    function() { $(this).removeClass('ui-state-hover'); }
    );
 
});
</script>
<script>
		jQuery.noConflict()(function($){
			var $container = $('#container-folio');
					
			if($container.length) {
				$container.waitForImages(function() {
					
					$container.isotope({
					  itemSelector : '.box',
					  layoutMode : 'fitRows'
					});
					
					$('#filters a').click(function(){
					  var selector = $(this).attr('data-filter');
					  $container.isotope({ filter: selector });
					  $(this).removeClass('active').addClass('active').siblings().removeClass('active all');
					  
					  return false;
					});
					
				},null,true);
			}});

</script>

	</head>
	<body>
		
		<div class="wrapper">
			<div class="head-top">	
				<div class=" nav navbar navbar-inverse" role="navigation">
						
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
			</div>
		</div>


