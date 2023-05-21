package com.chili.chili;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.chili.chili.dao.ChiliRepository;
import com.chili.chili.model.Chili;

@SpringBootApplication
public class ChiliApplication {

	public static void main(String[] args) {
		SpringApplication.run(ChiliApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(ChiliRepository repository) {
		return (args) -> {
			repository.save(new Chili("Lombardo", "Italien", 2000, 4, 30));
			repository.save(new Chili("Bhut Jolokia", "Indien", 800000, 20, 100));
			repository.save(new Chili("Ají Charapita", "Peru", 40000, 50, 20));
		};
	}

}
