CREATE TABLE IF NOT EXISTS `zooworkflow`.`animals` (
  `animal_id` INT NOT NULL AUTO_INCREMENT,
  `animal_name` VARCHAR(100) NOT NULL,
  `animal_specie` VARCHAR(100) NOT NULL,
  `animal_sex` VARCHAR(20) NOT NULL,
  `animal_age_on_years` FLOAT NOT NULL,
  `animal_place` INT NOT NULL,
  PRIMARY KEY (`animal_id`),
  INDEX `fk_animal_location_idx` (`animal_place` ASC) VISIBLE,
  CONSTRAINT `fk_animal_location`
    FOREIGN KEY (`animal_place`)
    REFERENCES `zooworkflow`.`locations` (`location_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `zooworkflow`.`locations` (
  `location_id` INT NOT NULL AUTO_INCREMENT,
  `location_name` VARCHAR(100) NOT NULL,
  `location_initials` VARCHAR(4) NOT NULL,
  PRIMARY KEY (`location_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `zooworkflow`.`managers` (
  `manager_id` INT NOT NULL AUTO_INCREMENT,
  `manager_firstname` VARCHAR(50) NOT NULL,
  `manager_lastname` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`manager_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `zooworkflow`.`caregivers` (
  `caregiver_id` INT NOT NULL AUTO_INCREMENT,
  `caregiver_firstname` VARCHAR(50) NOT NULL,
  `caregivers_lastname` VARCHAR(100) NOT NULL,
  `caregiver_manager` INT NOT NULL,
  `caregiver_age` INT NOT NULL,
  PRIMARY KEY (`caregiver_id`),
  INDEX `fk_caregiver_manager_idx` (`caregiver_manager` ASC) VISIBLE,
  CONSTRAINT `fk_caregiver_manager`
    FOREIGN KEY (`caregiver_manager`)
    REFERENCES `zooworkflow`.`managers` (`manager_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `zooworkflow`.`responsablefor` (
  `responsablefor_animal` INT NOT NULL,
  `responsablefor_caregiver` INT NOT NULL,
  INDEX `fk_responsablefor_animal_idx` (`responsablefor_animal` ASC) VISIBLE,
  INDEX `fk_responsablefor_caregiver_idx` (`responsablefor_caregiver` ASC) VISIBLE,
  PRIMARY KEY (`responsablefor_animal`, `responsablefor_caregiver`),
  CONSTRAINT `fk_responsablefor_animal`
    FOREIGN KEY (`responsablefor_animal`)
    REFERENCES `zooworkflow`.`animals` (`animal_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_responsablefor_caregiver`
    FOREIGN KEY (`responsablefor_caregiver`)
    REFERENCES `zooworkflow`.`caregivers` (`caregiver_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

