CREATE TABLE IF NOT EXISTS articles (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `headline` VARCHAR(64) NOT NULL,
  `text` TEXT NOT NULL,
  `photourl` TEXT NOT NULL,	
  `publishedon` DATE NOT NULL,
  `publishedby` INT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`publishedby`) REFERENCES users(id)
)