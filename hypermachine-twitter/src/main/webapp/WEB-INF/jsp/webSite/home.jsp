<%@ include file="../../../inicio.jspf" %>

<body>
		<div class="container">
			
			<h1><img src="images/logoHT.png" alt="HyperMachine Tweets" class="logotipo"></h1>
			<div class="menu-setores">
				<ul>
					
					<li><a href="<c:url value="/listavideos"/>">Videos</a></li>
					<li><a href="#">Músicas</a></li>
					<li><a href="#">Mais Comparthilhados</a></li>
					<li><a href="sobre.html">Sobre</a></li>
					<li><a href="#">Ajuda</a></li>
				</ul>
			</div>

		</div>

		<div id="main">	
			<div class="container destaque">
				<DIV class="busca">
					<h2>Busca</h2>
					<form>
						<input type="search">
						<input type="image" src="images/busca.png">
					</form>
				</div><!-- fim .busca -->

				<div class="menu-departamentos">
					<h2>Categorias</h2>
					<div>
						<ul>
						<li><a href="#">Videos</a>
							<ul>
								<li><a href="<c:url value="/listavideos"/>">Todos Videos</a></li>
								
								<li><a href="#">Top 10</a></li>
								<li><a href="#">Mais Vistos</a></li>
							</ul>
						</li>
						<li><a href="#">Novos Videos</a></li>
						<li><a href="#">Músicas</a>
							<ul>
								<li><a href="#">Todos Hits</a></li>
								<li><a href="#">Top 10</a></li>
								<li><a href="#">Mais Curtidas</a></li>
							</ul>
						</li>
						<li><a href="#">Novas Músicas</a></li>
						</ul>
					</div>
				</div><!-- fim .menu-departamentos -->
					<li>
						<h3>Video Mais Curtido</h3>
						<a href="produto.html">
									<iframe width="720" height="480"
									src="${v.location}">
									</iframe>
								</a>
						
					</li>
			</div><!-- fim .container .destaque -->
		</div>
			


		

			
				

		<div>
			<div class="rodape">
				<!-- <img src="images/logoHT.png" alt="Logo HyperMachine Tweets" class="logo"> -->
				<ul class="social">
					<li><a href="https://www.facebook.com/hypermachinetweets">Facebook</a></li>
					<li><a href="http://twitter.com/hypermachinetweets">Twitter</a></li>
					<li><a href="http://plus.google.com/hypermachinetweets">Google+</a></li>
				</ul>
			</div>
		</div>

	</body>
</html>