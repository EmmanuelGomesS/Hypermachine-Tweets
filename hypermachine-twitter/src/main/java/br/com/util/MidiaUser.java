package br.com.util;

import java.util.ArrayList;
import java.util.List;

import br.com.modelo.Midia;
import br.com.modelo.UserTwitter;

public class MidiaUser {
	
	private Midia midia;
	private List<String > users;
	private List<Midia> midialist;
	private String listUser="";
	
	public MidiaUser() {
		this.users = new ArrayList<String>();
		this.midialist = new ArrayList<Midia>();
	}
	public MidiaUser(Midia midia) {
		this.midia = midia;
		this.users = new ArrayList<String>();
		this.midialist = new ArrayList<Midia>();
	}
	public void setUsers(List<String> users) {
		this.users = users;
	}
	public void addMidia(Midia midia){
		this.midialist.add(midia);
	}
	public void setMidia(Midia midia) {
		this.midia = midia;
	}
	public List<String> getUsers() {
		return users;
	}
	public void setlistUser(String listUser) {
		this.listUser = listUser;
	}
	public void setlistUser(UserTwitter usr) {
		System.out.println("Search Usr: "+usr.getNome());
		listUser =listUser+ "<a href="+"https://twitter.com/"+usr.getNome()+">"+
				"<img width="+20+" height="+10+""
				+" src="+usr.getAvatar()+" "+"/>"+"</a>";
	}
	public String getlistUser() {
		return listUser;
	}
	public Midia getMidia() {
		return midia;
	}
	public void addUsr(String nome){
		this.users.add(nome);
	}
	public List<Midia> getMidialist() {
		return midialist;
	}
	public void setMidialist(List<Midia> midialist) {
		this.midialist = midialist;
	}

}
