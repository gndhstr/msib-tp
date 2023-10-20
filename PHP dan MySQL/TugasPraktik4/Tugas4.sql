INSERT INTO agents
VALUES
('A013', 'Budi', 'Jakarta', 0.11, '345-1234'),
('A014', 'Anita', 'Surabaya', 0.12, '575-5678'),
('A015', 'Cahyo', 'Bandung', 0.10, '234-9876'),
('A016', 'Aisyah', 'Yogyakarta', 0.18, '657-4321'),
('A017', 'Dharma', 'Semarang', 0.14, '345-8765'),
('A018', 'Eka', 'Bali', 0.16, '678-2345'),
('A019', 'Fajar', 'Surakarta', 0.13, '542-6789'),
('A020', 'Gita', 'Malang', 0.11, '654-5432'),
('A021', 'Dwi', 'Medan', 0.17, '321-7890'),
('A022', 'Hani', 'Makassar', 0.09, '986-3456');

UPDATE agents
SET AGENT_NAME = 'Bambang', WORKING_AREA = 'Semarang'
WHERE AGENT_CODE = 'A001';
UPDATE agents
SET AGENT_NAME = 'Jony', WORKING_AREA = 'Bekasi'
WHERE AGENT_CODE = 'A002';
UPDATE agents
SET AGENT_NAME = 'Rahmat', WORKING_AREA = 'Depoks'
WHERE AGENT_CODE = 'A003';
UPDATE agents
SET AGENT_NAME = 'Rani', WORKING_AREA = 'Bandung'
WHERE AGENT_CODE = 'A004';
UPDATE agents
SET AGENT_NAME = 'Kaesang', WORKING_AREA = 'Solo'
WHERE AGENT_CODE = 'A005';