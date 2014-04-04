<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	    <title>Hypermachine Tweets</title>
		<link href="theme.css" rel="stylesheet">
	</head>

<body>
<div class="wrapper">


<div id="head-top">	
<div class="navbar navbar-inverse" role="navigation">
		
	  <div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">

		</button>
		<a class="navbar-brand" href="#">Hypermachine Tweets</a>
	  </div>
		
	<div class="collapse navbar-collapse navbar-ex1-collapse">
	  	<ul class="nav navbar-nav">
		   <li><a href="#">Home</a></li>
		  <li><a href="VideoHome.html">Vídeos</a></li>
		  <li class="dropdown">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown">Músicas <b class="caret"></b></a>
			<ul class="dropdown-menu">
			  <li><a href="MusicaHome.html">Diversas</a></li>
			  <li><a href="rock.html">Rock</a></li>
			  <li><a href="pop.html">Pop</a></li>
			  <li><a href="eletronica.html">Eletronica</a></li>
			  <li><a href="sertanejo.html">Sertanejo</a></li>
			</ul>
		  </li>
		   
		</ul>
		<form class="navbar-form navbar-right visible-lg" role="search">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Busca">
				</div>
		<button type="submit" class="btn btn-primary">Buscar</button>
		</form>

	</div>


</div>
	

		<div id="myCarousel" class="carousel slide">
     
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class=""></li>
        <li data-target="#myCarousel" data-slide-to="1" class=""></li>
      </ol>
      <div class="carousel-inner">
        <div class="item active">
          
          <div class="container">
			<div class="row" >
				
				<div class="legenda">
					<h1 class="musi">A música mais popular.</h1>
						<div class="amusica">
					      <iframe width="600" height="450"  scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/135550877&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>
						</div>
				</div> 
			</div>
          </div>
        </div>
        <div class="item">
			<div class="container">
				<div class="row">
					<div class="legenda" >
						<h1 class="vid">O vídeo mais popular.</h1>
					</div>
					<div class="ovideo">
				
							<iframe  width="75%"  height="450"  
								src="http://www.youtube.com/embed/YEFdSUZQ2qU">
								</iframe>
						
					</div>
				</div>
			</div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="icon-prev"></span></a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="icon-next"></span></a>
    </div>

</div>

<div class="container">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
						<div class="page-header">
							<h3>Músicas e Vídeos direto do Twitter!</h3>
						</div>
		</div>
	</div>

</div>



<script src="jquery1.js" type="text/javascript"></script>

 
<script src="bootstrap.min.js"></script>
<script>
 $('.carousel').carousel() 
</script>

</body>
</html>