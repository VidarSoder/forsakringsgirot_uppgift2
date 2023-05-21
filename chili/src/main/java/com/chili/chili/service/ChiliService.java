package com.chili.chili.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.chili.chili.dao.ChiliRepository;
import com.chili.chili.model.Chili;

@Service
public class ChiliService {

    private final ChiliRepository chiliRepository;

    public ChiliService(ChiliRepository chiliRepository) {
        this.chiliRepository = chiliRepository;
    }

    public List<Chili> getChilis() {
        return chiliRepository.findAll();
    }

}
