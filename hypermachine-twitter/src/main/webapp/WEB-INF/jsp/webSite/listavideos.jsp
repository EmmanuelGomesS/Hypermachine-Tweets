<%@ include file="../../../inicio.jspf" %>

								

<div id="destaques">
			<div class="container paineis">
				<div class="painel novidades">
					<h2>Videos</h2>
					<ol>
						<li>
							<c:forEach items="${litweets}" var="litweets">
								<a href="produto.html">
									  <iframe width="350" height="250"
										src="${litweets.video.location}">
									</iframe>
								</a>
							</c:forEach>
						</li>
						
					</ol>
				</div>
</div>
