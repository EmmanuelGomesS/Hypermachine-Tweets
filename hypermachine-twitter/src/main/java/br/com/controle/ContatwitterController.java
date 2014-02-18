package br.com.controle;

import java.util.ArrayList;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.com.caelum.vraptor.validator.ValidationMessage;
import br.com.dao.ContaTwitterDao;
import br.com.interceptor.Restrito;
import br.com.modelo.ContaTwitter;

@Resource
public class ContatwitterController {
	
	private final ContaTwitterDao dao;
	private final Result result;
	private final Validator validator;
	public ContatwitterController(ContaTwitterDao dao,Result result,Validator validator) {
		this.result = result;
		this.dao = dao;
		this.validator = validator;
	}
	@Restrito
	public void menu(){
		
	}
	
	
	@Restrito
	public void remover(long id) {
		ContaTwitter conta = dao.carrega(id);
		dao.deletar(conta);
		this.result.redirectTo(this).lista();
		}
	
	@Path("contatwitter/lista")
	@Get
	@Restrito
	public List<ContaTwitter> lista(){
		return dao.listarTudo();
	}
	@Restrito
	@Path("contatwitter/formulario")
	public void formulario(){
		
	}
	@Restrito
	@Path("contatwitter/adiciona")
	public void adiciona(ContaTwitter contaTwitter) {
		if(contaTwitter.getNome() == null || contaTwitter.getNome().length()<2){
			validator.add(new ValidationMessage("Campo conta invalido verifique e tente novamente", "contaTwitter"));
		}
		validator.onErrorUsePageOf(this).formulario();
		 dao.salvar(contaTwitter);
		 this.result.redirectTo(this).lista();
		 }

}
