package com.chili.chili.dao;

import com.chili.chili.model.Chili;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChiliRepository extends JpaRepository<Chili, Long> {
}
