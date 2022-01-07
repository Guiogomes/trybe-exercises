CREATE TABLE artista (
	artist_id INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
    `last_name` VARCHAR(50) NOT NULL,
    `age` INTEGER
) ENGINE=InnoDB;

CREATE TABLE styles(
	style_id INT PRIMARY KEY AUTO_INCREMENT,
    `style_name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    `title1` VARCHAR(100) NOT NULL,
    `price` DECIMAL(5,2) NOT NULL,
    `artist_id` INT NOT NULL,
    `style_id` INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artista(artist_id),
    FOREIGN KEY (style_id) REFERENCES styles(style_id)
) ENGINE=InnoDB;