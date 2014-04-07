<%@ include file="../../../cabecalho.jsp" %>


<div id="container-folio" style="position:relative">
	<c:forEach items="${litvideos}" var="litvideos">
		<li class="box col-xs-6 col-md-4 col-sm-6 col-lg-3 graphics design">
			
		    <div >
				<div class="thumbnail">
						
					      <div class="pull-left thumbnail-video media video-wrap coluna-video">
		        <div class="embed-container hidden" ><iframe width="225" height="195" src="http://www.youtube.com/embed/${litvideos.location}" frameborder="0" allowfullscreen></iframe></div>
		        <div class="preview"><img alt="YouTube" width="225" height="195"  src="http://i.ytimg.com/vi/${litvideos.imgMidia}/mqdefault.jpg"  />
		        <button class="btn-unstyled btn-play-video">
		        <img  class="playImg" alt="Start video" height="92" src="http://assets1.fcbarcelona.com/images/btn-play-video@2x.2423a3d78.png" width="100" />
		        </button></div>
		      	</div>
		    		<a href="https://twitter.com/share" class="twitter-share-button" data-via="hypermachine_tweets" data-url="http://www.youtube.com/embed/${litvideos.location}"  data-lang="pt" data-count="none">Tweetar</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
					
					<button id="lk_2" class="dialog_link ui-state-default ui-corner-all but btn-primary" type="button" href="#">Contas</button>
					<div id="txt_2" class="dialog" title="Contas que twittaram essa música!"><h4>@JDBonfim<br>@Adrianogba</h4></div>
					<button id="lk_3" class="dialog_link ui-state-default ui-corner-all but2 btn-primary" type="button" href="#">Detalhes</button>
					<div id="txt_3" class="dialog but22" title="Album da música!"><img src="${litvideos.album}"></div>
				
					<a id="ssba_facebook_share" href="https://www.facebook.com/dialog/feed?app_id=19507961798&amp;display=popup&amp;redirect_uri=https%3A//youtube.com/fb_popup_callback.html&amp;link=http://www.youtube.com/embed/${litvideos.location}%3Futm_source%3Dyoutube%26utm_campaign%3Dshare%26utm_medium%3Dfacebook" target="_blank"><button class="facebook">Share</button></a>
				</div> 
			</div>
		</li>
	</c:forEach>  
</div>
</body>


</html>