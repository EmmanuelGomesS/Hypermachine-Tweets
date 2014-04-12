<%@ include file="../../../cabecalho.jsp" %>


<div id="container-folio" style="position:relative">
<c:forEach items="${listmusicas}" var="listmusicas">

<li class="box col-xs-6 col-md-4 col-sm-6 col-lg-3 ">
        <div >
		<div class="thumbnail">
				
			<div class="pull-left thumbnail-video media video-wrap coluna-musica">
        <div class="embed-container hidden" ><iframe width="225" height="195" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${listmusicas.midia.location}"></iframe></div>
        <div class="preview"><img width="225" height="195" alt="SoundCloud"  src="${listmusicas.midia.imgMidia}"  />
        <button class="btn-unstyled btn-play-video">
        	<img class="playImg" alt="Start video" height="92" src="http://assets1.fcbarcelona.com/images/btn-play-video@2x.2423a3d78.png" width="100" /></button></div>
   		 </div>
    		<a href="https://twitter.com/share" class="twitter-share-button" data-via="hypermachine_tweets - Gostei da musica" data-url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${listmusicas.midia.location}"  data-lang="pt" data-count="none">Tweetar</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
			
			
			<div class="img " title="Contas que twittaram essa música!"><h4>'${listmusicas.listUser}' </h4></div>
			
			<button id="lk_3" class="dialog_link ui-state-default ui-corner-all but2 btn-primary" type="button" href="#">Detalhes</button>
			<div id="txt_3" class="dialog but22" title="Album da música!"><img src="${listmusicas.midia.album}"></div>

			<a id="ssba_facebook_share" href="https://soundcloud.com/oficinag3oficial/descanso" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(this.href),'facebook-share-dialog','width=626,height=436');return false;"><button class="facebook">Compartilhar</button></a>
			
					
			

			
	</div> 
	
</div>
</li>





</c:forEach>
	  
   </div>
		
</body>


</html>