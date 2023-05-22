package com.chili.chili.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chili.chili.dao.ChiliRepository;
import com.chili.chili.exception.ChiliNotFoundException;
import com.chili.chili.exception.InvalidQuantityException;
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

    public Chili updateChiliQuantity(Long id, int quantity) {
        if (quantity < 0) {
            throw new InvalidQuantityException("Quantity must be equal or greater than zero");
        }
        Optional<Chili> chiliOptional = chiliRepository.findById(id);
        if (!chiliOptional.isPresent()) {
            throw new ChiliNotFoundException("Chili not found with id: " + id);
        }
        Chili chili = chiliOptional.get();
        chili.setQuantity(quantity);
        chiliRepository.save(chili);
        return chili;
    }

}
