-- TP6 Query 1

--Nomor 1
SELECT * FROM tbl_member;

--Nomor 2
SELECT * FROM tbl_member
WHERE status = 1 AND gender = 1;

--Nomor 3
SELECT * FROM tbl_member
WHERE status = 1 AND username LIKE '%ra Gamelab';


-- TP6 Query 2

--Create tbl_member
CREATE TABLE tbl_member (
    id INT(11) AUTO_INCREMENT,
    nama VARCHAR(100),
    gender CHAR(1),
    PRIMARY KEY (id)
);

--Create tbl_participant
CREATE TABLE tbl_participant (
    id INT AUTO_INCREMENT,
    id_member TINYINT(4),
    PRIMARY KEY (id)
);

-- Isi tabel dan tampilkan
INSERT INTO tbl_member (nama, gender) VALUES
    ('Uin', 'L'),
    ('Mia', 'P'),
    ('Milo', 'L');
INSERT INTO tbl_participant (id_member) VALUES
    (2),
    (3);

SELECT * FROM tbl_member;
SELECT * FROM tbl_participant;

-- Soal no.1
SELECT 
   tp.id, tm.nama, tm.gender
FROM 
   tbl_participant tp
INNER JOIN
   tbl_member tm 
ON 
   tp.id_member = tm.id;

-- Soal no.2
SELECT 
   tp.id, tm.nama, tm.gender
FROM 
   tbl_participant tp
INNER JOIN
   tbl_member tm 
ON 
   tp.id_member = tm.id AND tm.gender = 'P';