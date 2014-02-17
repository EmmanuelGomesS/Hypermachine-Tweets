package br.com.interceptor;

import java.util.Arrays;

import br.com.caelum.vraptor.InterceptionException;
import br.com.caelum.vraptor.Intercepts;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.core.InterceptorStack;
import br.com.caelum.vraptor.interceptor.Interceptor;
import br.com.caelum.vraptor.resource.ResourceMethod;
import br.com.caelum.vraptor.validator.ValidationMessage;
import br.com.controle.ContatwitterController;
import br.com.controle.AdministradorController;
import br.com.dao.AdministradorDao;

@Intercepts
public class AutorizacaoInterceptor implements Interceptor{
	
	private final UserInfo usuarioWeb;
	private final Result result;
	private final AdministradorDao dao;
	
	public AutorizacaoInterceptor(UserInfo usuarioWeb,AdministradorDao dao,Result result) {
		this.dao = dao;
		this.result = result;
		this.usuarioWeb = usuarioWeb;
	}
	
	public void intercept(InterceptorStack stack, ResourceMethod method,
			Object resourceInstance) throws InterceptionException {
		result.redirectTo(AdministradorController.class).loginForm();
//		if (usuarioWeb.getUser() == null) {
//    		// remember added parameters will survive one more request, when there is a redirect
//    		result.include("errors", Arrays.asList(new ValidationMessage("Usuario Nao estar Logado", "usuario")));
//    		result.redirectTo(UsuariosController.class).loginForm();
//    	} else {
//	    	dao.refresh(usuarioWeb.getUser());
//	    	// continues execution
//	    	stack.next(method, resourceInstance);
//	    	result.redirectTo(ProdutoController.class).lista();
//    	}
		
		
	}

	public boolean accepts(ResourceMethod method) {
		// TODO Auto-generated method stub
		return !this.usuarioWeb.isLogado() && method.containsAnnotation(Restrito.class);
	}

}
