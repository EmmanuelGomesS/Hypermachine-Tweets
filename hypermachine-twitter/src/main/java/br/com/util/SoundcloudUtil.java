package br.com.util;

import java.io.IOException;

import org.json.JSONException;
import org.json.JSONObject;

import com.soundcloud.api.Http;
import com.soundcloud.api.Soundcloud;

import br.com.modelo.Midia;

public class SoundcloudUtil {
	
	public Midia retrieveMusica(String url){
		Soundcloud soundcloud = new Soundcloud();
		Midia musica = null;
		try {
			String location = soundcloud.getApiUrlFromPermalink(url);
			System.out.println("Id: "+location);
			JSONObject json = Http.getJSON(soundcloud.getHttpResponse(location));
			String titulo = (String) json.get("title");
			String genero = (String) json.get("genre");
			String album = (String) json.get("attachments_uri");
			String categoria = "Musica";
			String tipo = "Soundcloud";
			musica = new Midia(titulo, location, categoria, album, genero, tipo);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return musica;
		
	}

}
