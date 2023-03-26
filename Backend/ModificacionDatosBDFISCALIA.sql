USE DBFISCALIA;
--Consulta
SELECT Id_departamento, Nombre_departamento FROM DEPARTAMENTO
--Modificacion
UPDATE DEPARTAMENTO SET Nombre_departamento='Guatemala' WHERE Id_departamento=7;
--Eliminacion
DELETE DEPARTAMENTO WHERE Id_departamento=9;