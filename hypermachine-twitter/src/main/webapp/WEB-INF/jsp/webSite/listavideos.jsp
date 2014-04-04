<!DOCTYPE>
<html>
	<head>
		<link href="tema.css" rel="stylesheet">
		<title>Hypermachine Tweets</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	
		<link href="fc.css" media="screen" rel="stylesheet" type="text/css" />
    <script src="http://assets2.fcbarcelona.com/javascripts/all.114703d6e.js" type="text/javascript"></script>
    
		<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
	</head>
	<body>
		
		<div class="wrapper">
			<div class="head-top">	
				<div class=" nav navbar navbar-inverse" role="navigation">
						
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"></button>
						<a class="navbar-brand" href="HomeSite.html">Hypermachine Tweets</a>
					</div>
						
					<div class="collapse navbar-collapse navbar-ex1-collapse">
					  	<ul class="nav navbar-nav">
						   <li><a href="HomeSite.html">Home</a></li>
						  <li><a href="VideoHome.html">Vídeos</a></li>
						  <li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Músicas <b class="caret"></b></a>
							<ul class="dropdown-menu">
							  <li><a href="#">Diversas</a></li>
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
			</div>
		</div>



		<div class="container">
				
			
		</div>

		<div id="container-folio" style="position:relative">
        <div class="box col-xs-6 col-md-4 col-sm-6 col-lg-3 graphics design">
		<div class="thumbnail">
				
			<div class="pull-left thumbnail-video media video-wrap coluna-musica">
        <div class="embed-container hidden" ><iframe width="225" height="195" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/135492380"></iframe></div><div class="preview"><img width="225" height="195" alt="SoundCloud"  src="soundcloud.png"  /><button class="btn-unstyled btn-play-video"><img class="playImg" alt="Start video" height="92" src="http://assets1.fcbarcelona.com/images/btn-play-video@2x.2423a3d78.png" width="100" /></button></div>
   		 </div>
    		<a href="https://twitter.com/share" class="twitter-share-button" data-via="hypermachine_tweets - Gostei da musica" data-url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/138765247"  data-lang="pt" data-count="none">Tweetar</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			
			<button id="lk_2" class="dialog_link ui-state-default ui-corner-all btn but btn-primary" type="button" href="#">Contas</button>
			<div id="txt_2" class="dialog" title="Contas que twittaram essa música!"><h4>Lais<br> Livia<br> Maria<br></h4></div>
			<button id="lk_3" class="dialog_link ui-state-default ui-corner-all but2 btn-primary" type="button" href="#">Detalhes</button>
			<div id="txt_3" class="dialog but22" title="Album da música!"><img src="large(3).jpg"></div>

			<a id="ssba_facebook_share" href="https://www.facebook.com/dialog/feed?app_id=19507961798&amp;display=popup&amp;redirect_uri=https%3A//soundcloud.com/fb_popup_callback.html&amp;link=https://soundcloud.com/rhcpexclusivetv/red-hot-chili-peppers%3Futm_source%3Dsoundcloud%26utm_campaign%3Dshare%26utm_medium%3Dfacebook" target="_blank"><button class="facebook">Share</button></a>


			
	</div> 
</div>
	  
   


			
	</div> 
</div>
	  

</div>
		
</body>
<script src="jquery1.js" type="text/javascript"></script>
<script src="bootstrap.min.js"></script>
<script type="text/javascript" src="jquery.waitforimages.js"></script> 
<script type="text/javascript" src="jquery.isotope.min.js"></script>
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

</html>