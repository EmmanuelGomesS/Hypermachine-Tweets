<%@ include file="../../../cabecalhoH.jsp" %>
	
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
					      <iframe width="600" height="450"  scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${m.location}&amp;auto_play=false&amp;hide_related=false&amp;visual=true"></iframe>
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
				
							<iframe  width="600"  height="450"  
								src="http://www.youtube.com/embed/${v.location}">
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

<script>
 $('.carousel').carousel() 
</script>
</body>
</html>ml>