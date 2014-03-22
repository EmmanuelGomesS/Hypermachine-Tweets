<%@ include file="../../../inicio.jspf" %>

								

<div id="destaques">
			<div class="container paineis">
				
				<div class="painel mais-vendidos">
					
					<h2>Musicas</h2>
					
					<ol>
						<li>
							<c:forEach items="${litmusicas}" var="litmusicas">
								
								<a href="produto.html">
									  
									<iframe class="iframe-responsive" width="350" height="250"
									src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${litmusicas.location}&amp;auto_play=false&amp;hide_related=false&amp;visual=true">
									</iframe>
									
									
								</a>
								<button type="button" ><a id="bt" href="webSite/listaUsuarios?location=${litmusicas.location}" onclick="NovaJanela(this.href,'nomeJanela','450','450','yes');return false">Usuarios Que Tuitaram</a></button>
								<button type="button" ><a id="bt" href="webSite/midiaAlbum?id=${litmusicas.id}" onclick="NovaJanela(this.href,'nomeJanela','450','450','yes');return false">Capa do Album</a></button>
								
								<a href="https://twitter.com/share" class="twitter-share-button" data-via="hypermachine_tweets - Gostei da musica" data-url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${litmusicas.location}"  data-lang="pt" data-count="none">Tweetar</a>
								<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
								
							</c:forEach>
							
						</li>
						
					</ol>
					</div>
			</div>
</div>
