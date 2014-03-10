package br.com.util;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import br.com.util.Validador;
import br.com.util.YoutubeUtil;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

import twitter4j.Status;
import twitter4j.URLEntity;

import br.com.dao.TweetsDao;
import br.com.dao.UserTwitterDao;
import br.com.dao.VideoDao;
import br.com.modelo.Tweets;
import br.com.modelo.UserTwitter;
import br.com.modelo.Video;
import br.com.util.TwitterUtil;

public class SalvarTweets {
	
	private TwitterUtil twitterUtil;
	private Validador validador;
	private YoutubeUtil youtubeUtil;
	
	private TweetsDao tweetsDao;
	private VideoDao videoDao;
	private AnnotationConfiguration configuration;
	private SessionFactory factory;
	private Session session ;

	
	public SalvarTweets() {
		this.configuration = new AnnotationConfiguration();
		this.validador = new Validador();
		configuration.configure();
		 this.factory = configuration.buildSessionFactory();
		 this.session = factory.openSession();
		twitterUtil = new TwitterUtil();
		youtubeUtil = new YoutubeUtil();
		this.videoDao = new VideoDao(session);
		this.tweetsDao = new TweetsDao(session);
		inicio();
		 
	}
	public void inicio(){
		
		
		 UserTwitterDao dao = new UserTwitterDao(session);
		 
		 List<UserTwitter> lista = dao.listarTudo();
		 for(UserTwitter usr:lista){
			 String usuario = usr.getNome();
			 try{
			        List<Status> estatus = twitterUtil.getTweets(usuario);
			        for(Status s : estatus){
			        	Date date = new Date();
			        	date.setDate(s.getCreatedAt().getDate());
			        	date.setMonth(s.getCreatedAt().getMonth());
			        	date.setYear(s.getCreatedAt().getYear());
			        				        	
			        	URLEntity[] urlEntities = s.getURLEntities();
			        	for(int i = 0;i<urlEntities.length;i++){
			        		System.out.println("Veio no for URL");
			        		int popularidade = s.getFavoriteCount();/// DEFINIR COMO POPULARIDADE DAS POSTAGEM <<<<<=======
			        		String url = urlEntities[i].getExpandedURL();
			        		if(validador.verificarURL(url).equals("youtube.com")){
			        			String idYoutube = validador.buscarIDYoutubeURL(url);
			        			Video video = youtubeUtil.retrieveVideos(idYoutube);
			        			if(video.getCategoria().equals("Music")){
			        				Tweets tweets = new Tweets(video, usr,date , popularidade);
			        				Collection<Tweets> existe = tweetsDao.carrega(usr);
			        				boolean liberado =true;
			        				for(Tweets t:existe){
			        					if(t.getVideo().getLocation().equals(video.getLocation())){
			        						liberado = false;

			        						break;
			        					}
			        				}
			        				if(liberado==true){
			        					videoDao.salvar(video);
			        					tweetsDao.salvar(tweets);
			        				}
			        			}
			        		}
			        		
			        		
			        	}
			        	System.out.println("========================================================== \n\n");
			        }
			        }catch(Exception e){
			        	e.printStackTrace();
			        	System.out.println("Problema na Conexao com a Rede.....");
			        }
			 
			 
		 }
		 
		 
	}
	public void listUserTwitter(){
		UserTwitterDao dao = new UserTwitterDao(session);
		List<UserTwitter> lista = dao.listarTudo();
	}
	public static void main(String[] args) {
		new SalvarTweets();
		
	}

}
