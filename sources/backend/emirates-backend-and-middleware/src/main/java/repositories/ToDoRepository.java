package repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import domain.ToDo;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {

}

