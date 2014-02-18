package br.com.controle;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.com.caelum.vraptor.validator.ValidationMessage;

import br.com.dao.AdministradorDao;
import br.com.interceptor.UsuarioWeb;
import br.com.modelo.Administrador;

@Resource
public class AdministradorController {
	
	private AdministradorDao dao;
	private Result result;
	private Validator validator;
	private final UsuarioWeb userinfo;
	
	
	public AdministradorController(AdministradorDao dao,Result result,Validator validator,UsuarioWeb userinfo) {
		this.userinfo = userinfo;
		this.validator = validator;
		this.result = result;
		this.dao = dao;
	}
	
	
	@Path("/")
	@Get
	public void loginForm(){
		
	}
	@Post("/login")
	public void login(Administrador usuario){
		Administrador carregado = dao.carregar(usuario);
		if(carregado==null){
			validator.add(new ValidationMessage("Login ou Senha Incorretos", "usuario"));
		}
		validator.onErrorUsePageOf(this).loginForm();
		userinfo.login(carregado);
		System.out.println("Usuario: "+userinfo.getNome());
		
		result.redirectTo(ContatwitterController.class).menu();
		System.out.println("Veio Redirecionando");
	
	}
	@Path("/logout")
	public void logout(){
		userinfo.logout();
		result.redirectTo(this).loginForm();
	}

}
