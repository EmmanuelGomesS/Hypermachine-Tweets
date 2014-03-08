package br.com.testeTwitter;

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

public class TestTweets {
	
	private TwitterUtil twitterUtil;
	private Validador validador;
	private YoutubeUtil youtubeUtil;
	
	private TweetsDao tweetsDao;
	private VideoDao videoDao;
	private AnnotationConfiguration configuration;
	private SessionFactory factory;
	private Session session ;

	
	public TestTweets() {
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
		 System.out.println("Veio 1");
		 for(UserTwitter usr:lista){
			 String usuario = usr.getNome();
			 try{
				 	System.out.println("Veio 2 , Usuario: "+usuario);
			        List<Status> estatus = twitterUtil.getTweets(usuario);
			        //System.out.println("Size: "+estatus.size());
			        System.out.println("Size: "+estatus.size());
			        for(Status s : estatus){
			        	System.out.println("Veio 4");
			        	Date date = new Date();
			        	date.setDate(s.getCreatedAt().getDate());
			        	date.setMonth(s.getCreatedAt().getMonth());
			        	date.setYear(s.getCreatedAt().getYear());
			        	//String data = date.getDate()+"/"+date.getMonth()+"/"+(date.getYear()+1900);
			        	System.out.println("Data: "+date.getDate()+"/"+date.getMonth()+"/"+(date.getYear()+1900));
			        	
			        	
			        	URLEntity[] urlEntities = s.getURLEntities();
			        	for(int i = 0;i<urlEntities.length;i++){
			        		System.out.println("Veio no for URL");
			        		int popularidade = s.getFavoriteCount();/// DEFINIR COMO POPULARIDADE DAS POSTAGEM <<<<<=======
			        		String url = urlEntities[i].getExpandedURL();
			        		if(validador.verificarURL(url).equals("youtube.com")){
			        			String idYoutube = validador.buscarIDYoutubeURL(url);
			        			Video video = youtubeUtil.retrieveVideos(idYoutube);
			        			if(video.getCategoria().equals("Music")){
			        				
			        				videoDao.salvar(video);
			        				System.out.println("Adicionou o video ao banco");
			        				Tweets tweets = new Tweets(video, usr,date , popularidade);
			        				tweetsDao.salvar(tweets);
			        				System.out.println("Adicionou uma nova postagem");
			        				
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
		new TestTweets();
		
	}

}
