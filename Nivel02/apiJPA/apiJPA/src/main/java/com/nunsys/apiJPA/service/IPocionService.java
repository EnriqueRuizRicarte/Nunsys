package com.nunsys.apiJPA.service;

import com.nunsys.apiJPA.domain.Pocion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPocionService {

    public List<Pocion> findAll();
    public Pocion save(Pocion pocion);
    public void delete(Long id);
    public Pocion findById(Long id);
    public List<Pocion> findAllEpic(Boolean bool);
}
