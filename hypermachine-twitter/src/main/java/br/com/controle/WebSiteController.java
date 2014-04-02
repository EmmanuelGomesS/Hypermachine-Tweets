package br.com.controle;

import java.util.ArrayList;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.dao.MidiaDao;
import br.com.dao.TweetsDao;
import br.com.dao.UserTwitterDao;
import br.com.modelo.Midia;
import br.com.modelo.Tweets;
import br.com.modelo.UserTwitter;

@Resource
public class WebSiteController {
	
	private MidiaDao midiaDao;
	private TweetsDao tweetsDao;
	private UserTwitterDao userDao;
	private Result result;
	private List<UserTwitter> litUsres;
	
	public WebSiteController(MidiaDao midiaDao,UserTwitterDao userDao,TweetsDao tweetsDao,Result result) {
		
		this.result = result;
		
		this.midiaDao = midiaDao;
		this.userDao = userDao;
		this.tweetsDao = tweetsDao;
	}
	
	@Path("/")
	@Get
	public void home(){
		//Musicas Mais Curtida
		List<Tweets> tweets = tweetsDao.listarTudo();
		Midia v=null;
		int popular =0;
		for(Tweets tw:tweets){
			if(tw.getPopularidade()>popular){
				popular = tw.getPopularidade();
				v= tw.getMidia();
			}
		}
		listavideos();
		listamusicas();
		result.include("v", v);
	}
	
	
	@Path("/listavideos")
	@Get
	public void listavideos(){
		//Lista Musicas Usando o Youtube
		List<Midia> litvideos = new ArrayList<Midia>();
		List<Tweets> tweets = tweetsDao.listarTudo();
				
		for(Tweets tw:tweets){
			if(tw.getMidia().getTipo().equals("Youtube")){
				litvideos.add(tw.getMidia());
			}
		}
		result.include("litvideos", litvideos);
	}
	@Path("/listamusicas")
	@Get
	public void listamusicas(){
		//Lista Musicas Usando o Soundcloud
		List<Midia> litmusicas = new ArrayList<Midia>();
		List<Tweets> tweets = tweetsDao.listarTudo();
		for(Tweets tw:tweets){
			if(tw.getMidia().getTipo().equals("Soundcloud")){
				litmusicas.add(tw.getMidia());
			}
		}

		result.include("litmusicas", litmusicas);
	}

	public void listaUsuarios(String location){
		//Lista Usuarios que Twwets uma Midia
		List<Tweets> tweets = tweetsDao.listarTudo();
		List<UserTwitter> litUsres = new ArrayList<UserTwitter>();
		for(Tweets tw:tweets){
			if(tw.getMidia().getLocation().equals(location)){
				litUsres.add(tw.getUsertwitter());
			}
		}
		if(litUsres.size()>0){
			result.include("litUsres", litUsres);
		}
		else{
			result.redirectTo(this).home();
		}
		
	}
	
	
	public void midiaAlbum(int id){
		//Recebe o Id para pegar o album da midia
		Midia midia=null;
		midia = midiaDao.carrega(id);
		if(id==0){
			result.redirectTo(this).home();
		}
		else{
			result.include("midia", midia);
		}
		
	}
	
	//Estilos Musicais
		@Path("musica/cateroria/pop")
		@Get
		public void pop(){
			//Lista Musicas Usando o Soundcloud
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals("Soundcloud")){
					if(tw.getMidia().getGenero().contains("pop")||tw.getMidia().getGenero().contains("Pop")){
						System.out.println("Pop: "+ tw.getMidia().getTitulo());
						litmusicas.add(tw.getMidia());
					}
					
				}
			}

			result.include("litmusicas", litmusicas);
		}
		@Path("musica/cateroria/rock")
		@Get
		public void rock(){
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals("Soundcloud")){
					if(tw.getMidia().getGenero().contains("Rock")||tw.getMidia().getGenero().contains("Metal")){
					litmusicas.add(tw.getMidia());
					}
				}
			}

			result.include("litmusicas", litmusicas);
		}
		@Path("musica/cateroria/forro")
		@Get
		public void forro(){
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals("Soundcloud")){
					if(tw.getMidia().getGenero().contains("Forro")){
						System.out.println("FORRO: "+tw.getMidia().getTitulo());
						litmusicas.add(tw.getMidia());
					}
					
				}
			}

			result.include("litmusicas", litmusicas);
		}
		@Path("musica/cateroria/dance")
		@Get
		public void dance(){
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals("Soundcloud")){
					if(tw.getMidia().getGenero().contains("Dance")||tw.getMidia().getGenero().contains("Electro")){
						litmusicas.add(tw.getMidia());
						System.out.println("DANCE: "+tw.getMidia().getTitulo());

					}
					
				}
			}

			result.include("litmusicas", litmusicas);
		}
		
		@Path("/busca")
		public void busca(String search){
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals("Soundcloud")){
					if(tw.getMidia().getTitulo().contains(search)){
						litmusicas.add(tw.getMidia());
						System.out.println("DANCE: "+tw.getMidia().getTitulo());

					}
					
				}
			}

			result.include("litmusicas", litmusicas);
		}
		
}