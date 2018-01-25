package services;

import java.util.List;

import org.springframework.stereotype.Service;

import DTO.ToDoDTO;
import domain.ToDo;

public interface ToDoService {

	public ToDo add(ToDoDTO toDo);

	public boolean isValid(ToDoDTO toDo);

	public List<ToDo> getAll();

	public boolean isValid(ToDo toDo);

	public void delete(ToDo toDo);

	public ToDo getTodoById(Long id);

	public void update(ToDo toDo);
	
}
