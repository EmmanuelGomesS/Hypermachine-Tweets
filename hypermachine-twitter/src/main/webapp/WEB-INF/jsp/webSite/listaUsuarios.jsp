<%@ include file="../../../cabecalho.jsp" %>

<ol>
						<li>
							
							<c:forEach items="${litUsres}" var="litUsres">
								<iframe width="50" height="40"  scrolling="no" frameborder="no" src="${litUsres.avatar}"></iframe>
									
								<a href="https://twitter.com/${litUsres.nome}">${litUsres.nome}</a><br>
							</c:forEach>
						</li>
						
					</ol>