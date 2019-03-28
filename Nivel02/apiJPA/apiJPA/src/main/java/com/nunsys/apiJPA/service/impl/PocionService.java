package com.nunsys.apiJPA.service.impl;

import com.nunsys.apiJPA.domain.Pocion;
import com.nunsys.apiJPA.repository.PocionRepository;
import com.nunsys.apiJPA.service.IPocionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PocionService implements IPocionService {

    private PocionRepository pocionRepository;

    //Constructor de la clase
    public PocionService(PocionRepository pocionRepository) {
        this.pocionRepository = pocionRepository;
    }

    @Override
    public List<Pocion> findAll() {
        return this.pocionRepository.findAll();
    }

    @Override
    public Pocion save(Pocion pocion) {
        return this.pocionRepository.save(pocion);
    }

    @Override
    public void delete(Long id) {
        Pocion pocion = this.pocionRepository.findById(id).get();
        this.pocionRepository.delete(pocion);
    }

    @Override
    public Pocion findById(Long id) {
        return this.pocionRepository.findById(id).get();
    }

    @Override
    public List<Pocion> findAllEpic(Boolean bool) {
        return this.pocionRepository.findByEsEpica(bool);
    }
}
