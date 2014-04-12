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
import br.com.util.MidiaUser;

@Resource
public class WebSiteController {
	
	private MidiaDao midiaDao;
	private TweetsDao tweetsDao;
	private UserTwitterDao userDao;
	private Result result;
	private List<UserTwitter> litUsres;
	private String soundcloud="Soundcloud";
	private String youtube="Youtube";
	
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
			if(tw.getMidia().getTipo().equals(youtube)){
				if(tw.getPopularidade()>popular){
					popular = tw.getPopularidade();
					v= tw.getMidia();
				}
			}
		}
		music();
		result.include("v", v);
	}
	public void music(){
		//Musicas Mais Curtida
		List<Tweets> tweets = tweetsDao.listarTudo();
		Midia m=null;
		int popular =0;
		for(Tweets tw:tweets){
			if(tw.getMidia().getTipo().equals(soundcloud)){
				if(tw.getPopularidade()>=popular){
					popular = tw.getPopularidade();
					m= tw.getMidia();
				}
			}
		}
		System.out.println("MUSIC: "+m.getTitulo());
		result.include("m", m);
	}
	
	
	@Path("/listavideos")
	@Get
	public void listavideos(){
		//Lista Musicas Usando o Youtube
		List<MidiaUser> listvideos = new ArrayList<MidiaUser>();
		List<Tweets> tweets = tweetsDao.listarTudo();
				
		for(Tweets tw:tweets){
			if(tw.getMidia().getTipo().equals(youtube)){
				MidiaUser mid = new MidiaUser(tw.getMidia());
				if(listvideos.size()>0){
					
					for(int i=0;i<listvideos.size();i++){						
						if(mid.getMidia().getLocation().equals(listvideos.get(i).getMidia().getLocation())){
							String usrlist=listvideos.get(i).getlistUser();
							listvideos.get(i).setlistUser(tw.getUsertwitter());
							mid.setlistUser(usrlist);														
						}
					}
					mid.setlistUser(tw.getUsertwitter());
					listvideos.add(mid);
					
				}
				else{					
					mid.setlistUser(tw.getUsertwitter());
					listvideos.add(mid);
				}
			}
		}
		result.include("listvideos", listvideos);
	}
	
	@Path("/listamusicas")
	@Get
	public void listamusicas(){
		//Lista Musicas Usando o Soundcloud
		List<Tweets> tweets = tweetsDao.listarTudo();
		List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
		for(Tweets tw:tweets){
			//System.out.println("USERTwwiter: "+tw.getUsertwitter().getAvatar());
			if(tw.getMidia().getTipo().equals(soundcloud)){
				MidiaUser mid = new MidiaUser(tw.getMidia());
				if(listmusicas.size()>0){
					
					for(int i=0;i<listmusicas.size();i++){						
						if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
							String usrlist=listmusicas.get(i).getlistUser();
							listmusicas.get(i).setlistUser(tw.getUsertwitter());
							mid.setlistUser(usrlist);														
						}
					}
					mid.setlistUser(tw.getUsertwitter());
					listmusicas.add(mid);
					
				}
				else{					
					mid.setlistUser(tw.getUsertwitter());
					listmusicas.add(mid);
				}
			}
		}
		result.include("listmusicas", listmusicas);
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
		@Path("/pop")
		@Get
		public void pop(){
			//Lista Musicas Usando o Soundcloud
			List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals(soundcloud)){
					if(tw.getMidia().getGenero().toUpperCase().contains("POP")){
						MidiaUser mid = new MidiaUser(tw.getMidia());
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
					
				}
			}

			result.include("listmusicas", listmusicas);
		}
		@Path("/rock")
		@Get
		public void rock(){
			List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals(soundcloud)){
					if(tw.getMidia().getGenero().toUpperCase().contains("ROCK")||tw.getMidia().getGenero().toUpperCase().contains("METAL")){
						MidiaUser mid = new MidiaUser(tw.getMidia());
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
					
				}
			}

			result.include("listmusicas", listmusicas);
		}
		@Path("/forro")
		@Get
		public void forro(){
			List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals(soundcloud)){
					if(tw.getMidia().getGenero().toUpperCase().contains("FORRO")){
						MidiaUser mid = new MidiaUser(tw.getMidia());
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
					
				}
			}

			result.include("listmusicas", listmusicas);
		}
		@Path("/dance")
		@Get
		public void dance(){
			List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals(soundcloud)){
					if(tw.getMidia().getGenero().toUpperCase().contains("DANCE")||tw.getMidia().getGenero().toUpperCase().contains("ELECTRO")){
						MidiaUser mid = new MidiaUser(tw.getMidia());
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
					
				}
			}

			result.include("listmusicas", listmusicas);
		}
		
		@Path("/busca")
		public void busca(String search){
			List<Midia> litmusicas = new ArrayList<Midia>();
			List<MidiaUser> listmusicas = new ArrayList<MidiaUser>();
			List<Tweets> tweets = tweetsDao.listarTudo();
			if(search==null){search="default";}
			for(Tweets tw:tweets){
				if(tw.getMidia().getTipo().equals(soundcloud)){
					if(tw.getMidia().getTitulo().toUpperCase().contains(search.toUpperCase())){
						String location = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+tw.getMidia().getLocation();
						String tipo = tw.getMidia().getTipo().toLowerCase();
						Midia midia = new Midia(null, location, null, tw.getMidia().getAlbum(), null, tipo, tw.getMidia().getImgMidia());
						MidiaUser mid = new MidiaUser(midia);
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
				}
				else if(tw.getMidia().getTipo().equals(youtube)){
					if(tw.getMidia().getTitulo().toUpperCase().contains(search.toUpperCase())){
						String location = "http://www.youtube.com/embed/"+tw.getMidia().getLocation();
						String imgMidia = "http://i.ytimg.com/vi/"+tw.getMidia().getImgMidia()+"/mqdefault.jpg";
						String tipo = tw.getMidia().getTipo().toLowerCase();
						
						Midia midia = new Midia(null, location, null, tw.getMidia().getAlbum(), null, tipo, imgMidia);

						MidiaUser mid = new MidiaUser(midia);
						if(listmusicas.size()>0){
							
							for(int i=0;i<listmusicas.size();i++){						
								if(mid.getMidia().getLocation().equals(listmusicas.get(i).getMidia().getLocation())){
									String usrlist=listmusicas.get(i).getlistUser();
									listmusicas.get(i).setlistUser(tw.getUsertwitter());
									mid.setlistUser(usrlist);														
								}
							}
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
							
						}
						else{					
							mid.setlistUser(tw.getUsertwitter());
							listmusicas.add(mid);
						}
					}
				}
			}
			result.include("listmusicas", listmusicas);
		}
		
}