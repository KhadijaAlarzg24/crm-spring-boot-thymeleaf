package com.bmt.webapp.repositories;
import com.bmt.webapp.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer>{

    public Client findByEmail(String email);
}



