package com.nunsys.apiJPA.repository;

import com.nunsys.apiJPA.domain.Pocion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PocionRepository extends JpaRepository<Pocion, Long> {
    List<Pocion> esEpica(Boolean bool);
}
