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
import br.com.dao.VideoDao;
import br.com.interceptor.UsuarioWeb;
import br.com.modelo.Tweets;
import br.com.modelo.UserTwitter;
import br.com.modelo.Video;

@Resource
public class WebSiteController {
	
	private VideoDao videoDao;
	private TweetsDao tweetsDao;
	private UserTwitterDao userDao;
	private Result result;
	
	public WebSiteController(VideoDao videoDao,UserTwitterDao userDao,TweetsDao tweetsDao,Result result) {
		
		this.result = result;
		
		this.videoDao = videoDao;
		this.userDao = userDao;
		this.tweetsDao = tweetsDao;
	}
	
	@Path("/")
	@Get
	public void home(){
		List<Tweets> tweets = tweetsDao.listarTudo();
		Video v=null;
		int popular =0;
		for(Tweets tw:tweets){
			if(tw.getPopularidade()>popular){
				popular = tw.getPopularidade();
				v=tw.getVideo();
			}
			
			
		}
		
		
		result.include("v", v);
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
			t.setVideo(tw.getVideo());
			litweets.add(t);
		}
		
		result.include("litweets", litweets);
	}
	
}
