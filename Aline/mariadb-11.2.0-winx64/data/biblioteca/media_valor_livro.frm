TYPE=VIEW
query=select `biblioteca`.`livro`.`id_livro` AS `id_livro`,`biblioteca`.`livro`.`nome_livro` AS `nome_livro`,`biblioteca`.`livro`.`valor_livro` AS `valor_livro`,`biblioteca`.`livro`.`genero_livro` AS `genero_livro` from `biblioteca`.`livro` where `biblioteca`.`livro`.`valor_livro` >= (select avg(`biblioteca`.`livro`.`valor_livro`) from `biblioteca`.`livro`)
md5=f8964f552b6ad24c283baaedd5e635c2
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=0001693611667810017
create-version=2
source=SELECT *FROM livro WHERE valor_livro >= (SELECT AVG(valor_livro) FROM livro)
client_cs_name=utf8mb4
connection_cl_name=utf8mb4_general_ci
view_body_utf8=select `biblioteca`.`livro`.`id_livro` AS `id_livro`,`biblioteca`.`livro`.`nome_livro` AS `nome_livro`,`biblioteca`.`livro`.`valor_livro` AS `valor_livro`,`biblioteca`.`livro`.`genero_livro` AS `genero_livro` from `biblioteca`.`livro` where `biblioteca`.`livro`.`valor_livro` >= (select avg(`biblioteca`.`livro`.`valor_livro`) from `biblioteca`.`livro`)
mariadb-version=110200
