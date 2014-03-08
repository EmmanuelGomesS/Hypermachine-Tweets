package br.com.dao;

import java.util.List;

import org.hibernate.Session;

import br.com.caelum.vraptor.ioc.Component;
import br.com.modelo.Tweets;

@Component
public class TweetsDao {
	
	private final Session session;
	public TweetsDao(Session session) {
		this.session = session;
	}
	
	public void salvar(Tweets tweets) {
		//Transaction tx =  session.beginTransaction();
		session.save(tweets);
		//tx.commit();
	}
	
	public List<Tweets> listarTudo() {
		return session.createCriteria(Tweets.class).list();
	}
	public Tweets consultarPostagem(long id) {
		return (Tweets) this.session.load(Tweets.class, id);
	}

}
