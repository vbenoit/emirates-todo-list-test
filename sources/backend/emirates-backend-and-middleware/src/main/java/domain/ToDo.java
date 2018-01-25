package domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todos")
public class ToDo {

	@Id
    private Long id;
	
	private String content;
	private String status;
	
	protected ToDo(){}
	
	public ToDo(String pContent, String pStatus) {
		id = generateId();
        setContent(pContent);
        setStatus(pStatus);
	}
	
	private Long generateId() {
		
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		return timestamp.getTime();
	}

	public Long getId() {
		return id;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String state) {
		this.status = state;
	}
	
}
