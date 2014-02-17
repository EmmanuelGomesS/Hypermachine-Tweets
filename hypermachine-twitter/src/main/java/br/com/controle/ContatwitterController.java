package br.com.controle;

import java.util.ArrayList;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.dao.ContaTwitterDao;
import br.com.interceptor.Restrito;
import br.com.modelo.ContaTwitter;

@Resource
public class ContatwitterController {
	
	private final ContaTwitterDao dao;
	private final Result result;
	public ContatwitterController(ContaTwitterDao dao,Result result) {
		this.result = result;
		this.dao = dao;
	}
	
	
	@Restrito
	public void remover(long id) {
		ContaTwitter conta = dao.carrega(id);
		dao.deletar(conta);
		this.result.redirectTo(this).lista();
		}
	
	@Path("contatwitter/lista")
	@Get
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
		 
		 dao.salvar(contaTwitter);
		 this.result.redirectTo(this).lista();
		 }

}
