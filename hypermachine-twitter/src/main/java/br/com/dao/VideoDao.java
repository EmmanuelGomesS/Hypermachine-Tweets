package br.com.dao;

import java.util.List;

import org.hibernate.Session;

import br.com.caelum.vraptor.ioc.Component;
import br.com.modelo.Midia;

@Component
public class VideoDao {
	
	
	private final Session session;
	public VideoDao(Session session) {
		this.session = session;
	}
	
	public void salvar(Midia video) {
		//Transaction tx =  session.beginTransaction();
		session.save(video);
		//tx.commit();
	}
	
	public List<Midia> listarTudo() {
		return session.createCriteria(Midia.class).list();
	}


}
