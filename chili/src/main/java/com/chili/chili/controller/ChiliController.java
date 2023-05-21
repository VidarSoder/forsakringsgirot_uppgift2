package com.chili.chili.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chili.chili.model.Chili;
import com.chili.chili.service.ChiliService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ChiliController {

    private final ChiliService chiliService;

    public ChiliController(ChiliService chiliService) {
        this.chiliService = chiliService;
    }

    @GetMapping("/chilis")
    public List<Chili> getAllChilis() {
        return chiliService.getChilis();
    }

    @PostMapping("/chilis/{id}/{quantity}")
    public Chili updateChiliQuantity(@PathVariable Long id, @PathVariable int quantity) {
        return chiliService.updateChiliQuantity(id, quantity);
    }

}
