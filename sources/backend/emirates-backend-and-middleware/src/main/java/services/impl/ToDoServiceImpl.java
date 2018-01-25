package services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import DTO.ToDoDTO;
import domain.ToDo;
import repositories.ToDoRepository;
import services.ToDoService;

@Service("toDoSvc")
public class ToDoServiceImpl implements ToDoService {

	private static final String TODO_PENDING_STATUS = "PENDING";
	@Autowired @Qualifier("toDoRepo") private ToDoRepository toDoRepository;
	
	public ToDo add(ToDoDTO toDo) {
		
		ToDo toDoToAdd = new ToDo(toDo.getContent(), TODO_PENDING_STATUS);

		return this.toDoRepository.save(toDoToAdd);
	}
	
	public void delete( ToDo toDo ) {		
		this.toDoRepository.delete( toDo );
	}

	public boolean isValid(ToDoDTO toDo) {
		return !"".equals(toDo.getContent());
	}

	public List<ToDo> getAll() {
		
		List<ToDo> returnList = (List<ToDo>) this.toDoRepository.findAll();
		
		if ( returnList == null ){
			returnList = new ArrayList<ToDo>();
		}
		
		return returnList;
	}

	@Override
	public boolean isValid(ToDo toDo) {
		return !"".equals(toDo.getContent())
				&& !"".equals(toDo.getStatus()) 
				&& toDo.getId() != 0L;
	}

	@Override
	public ToDo getTodoById(Long id) {
		return this.toDoRepository.findOne(id);
	}

	@Override
	public void update(ToDo toDo) {
		this.toDoRepository.save(toDo);
		
	}
	
}
