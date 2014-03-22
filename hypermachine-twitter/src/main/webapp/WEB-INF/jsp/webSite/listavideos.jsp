<%@ include file="../../../inicio.jspf" %>

								

<div id="destaques">
			<div class="container paineis">
				<div class="painel novidades">
					<h2>Videos</h2>
					<ol>
						<li>
							<c:forEach items="${litvideos}" var="litvideos">
								<a href="produto.html">
									  <iframe width="350" height="250"
										src="http://www.youtube.com/embed/${litvideos.location}">
									</iframe>
								</a>
								<button type="button" ><a id="bt" href="webSite/listaUsuarios?location=${litvideos.location}" onclick="NovaJanela(this.href,'nomeJanela','450','450','yes');return false">Usuarios Que Tuitaram</a></button>
								<button type="button" ><a id="bt" href="webSite/midiaAlbum?id=${litvideos.id}" onclick="NovaJanela(this.href,'nomeJanela','450','450','yes');return false">Capa do Album</a></button>
								
								<a href="https://twitter.com/share" class="twitter-share-button" data-via="hypermachine_tweets - Gostei da musica" data-url="${litvideos.location}"  data-lang="pt" data-count="none">Tweetar</a>
								<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
								
							</c:forEach>
						</li>
						
					</ol>
				</div>
</div>
