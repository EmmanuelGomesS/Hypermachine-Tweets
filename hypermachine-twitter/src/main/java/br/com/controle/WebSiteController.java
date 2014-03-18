package br.com.controle;

import java.util.ArrayList;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.com.dao.AdministradorDao;
import br.com.dao.TweetsDao;
import br.com.dao.UserTwitterDao;
import br.com.dao.MidiaDao;
import br.com.interceptor.UsuarioWeb;
import br.com.modelo.Tweets;
import br.com.modelo.UserTwitter;
import br.com.modelo.Midia;

@Resource
public class WebSiteController {
	
	private MidiaDao videoDao;
	private TweetsDao tweetsDao;
	private UserTwitterDao userDao;
	private Result result;
	
	public WebSiteController(MidiaDao videoDao,UserTwitterDao userDao,TweetsDao tweetsDao,Result result) {
		
		this.result = result;
		
		this.videoDao = videoDao;
		this.userDao = userDao;
		this.tweetsDao = tweetsDao;
	}
	
	@Path("/")
	@Get
	public void home(){
		List<Tweets> tweets = tweetsDao.listarTudo();
		Midia video=null;
		int popular =0;
		for(Tweets tw:tweets){
			if(tw.getPopularidade()>popular){
				if(tw.getMidia().getTipo().equals("Youtube")){
					popular = tw.getPopularidade();
					video=tw.getMidia();
				}
				
			}
			
			
		}
		
		
		result.include("video", video);
	}
	@Path("/listavideos")
	@Get
	public void listavideos(){
		List<Tweets> litweets = new ArrayList<Tweets>();
		List<Tweets> tweets = tweetsDao.listarTudo();
		for(Tweets tw:tweets){
			Tweets t = new Tweets();
			t.setId(tw.getId());
			t.setData(tw.getData());
			t.setPopularidade(tw.getPopularidade());
			t.setUsertwitter(tw.getUsertwitter());
			t.setMidia(tw.getMidia());
			litweets.add(t);
		}
		
		result.include("litweets", litweets);
	}
	
}
