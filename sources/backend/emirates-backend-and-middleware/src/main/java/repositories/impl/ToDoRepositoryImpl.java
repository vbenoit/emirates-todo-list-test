package repositories.impl;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import domain.ToDo;
import repositories.ToDoRepository;

@Repository("toDoRepo")
public class ToDoRepositoryImpl extends SimpleJpaRepository<ToDo, Long> implements ToDoRepository {

	private CriteriaBuilder cb;
    private EntityManager em;
	
	public ToDoRepositoryImpl(EntityManager em) {
		super(ToDo.class, em);
		this.em = em;
        this.cb = em.getCriteriaBuilder();
	}

}
