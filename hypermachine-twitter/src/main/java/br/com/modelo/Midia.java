package br.com.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public  class Midia {
	@Id
	@GeneratedValue
    private Long id;
    
	private String titulo;
	private String location;
	private String categoria;
	private String album;
	private String genero;
	private String tipo;
	private String imgMidia;



    public Midia() {
		// TODO Auto-generated constructor stub
	}
    public Midia(String titulo,String location,String categoria,String album,String genero,String tipo,String imgMidia) {
    	this.location = location;
         this.titulo = titulo;
         this.categoria = categoria;
         this.album = album;
         this.genero = genero;
         this.tipo = tipo;
         this.imgMidia =imgMidia;
         
    }
    public String getImgMidia() {
		return imgMidia;
	}
    public void setImgMidia(String imgMidia) {
		this.imgMidia = imgMidia;
	}
    public String getAlbum() {
		return album;
	}
    public void setAlbum(String album) {
		this.album = album;
	}
    public String getGenero() {
		return genero;
	}
    public void setGenero(String genero) {
		this.genero = genero;
	}
    
    
    public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
    public String getCategoria() {
		return categoria;
	}
    public String getLocation() {
		return location;
	}
    public void setLocation(String location) {
		this.location = location;
	}
    public String getTipo() {
		return tipo;
	}
    public void setTipo(String descricao) {
		this.tipo = descricao;
	}
    public String getTitulo() {
		return titulo;
	}
    public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}



	


}
