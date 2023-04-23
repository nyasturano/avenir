insert into employers (name,email,password) values('Заказчик Петр','test@mail.ru','$2a$05$D.ByGcniVog3oB/rTAQA9O9NLA4sR3R.UynM5GkErWoUm/rszE.u6');
insert into employers (name,email,password) values('Заказчик Василий','test1@mail.ru','dcdfefjoqdafqwqj');


insert into employees (name,phone,email,password) values('Исполнитель Геннадий',89898989898 ,'test2@mail.ru','vdwegbr');
insert into employees (name,phone,email,password) values('Исполнитель Андрей',null,'test3@mail.ru','vwegdzcbr');
insert into employees (name,phone,email,password) values('Исполнитель Александр',null,'test4@mail.ru','adewge');
insert into employees (name,phone,email,password) values('Исполнитель Иван',null,'test5@mail.ru','faffdac');
insert into employees (name,phone,email,password) values('Исполнитель Дмитрий',null,'test6@mail.ru','fafdgwe');
insert into employees (name,phone,email,password) values('Исполнитель Михаил',null,'test7@mail.ru','affwaf');

insert into projects (name, "employeeId", "employerId") values('Проект 1', 1,1);
insert into projects (name, "employeeId", "employerId") values('Проект 2', 2,1);
insert into projects (name, "employeeId", "employerId") values('Проект 3', 3,1);
insert into projects (name, "employeeId", "employerId") values('Проект 4', 4,2);

insert into statuses (status) values('Ожидание');
insert into statuses (status) values('В процессе');
insert into statuses (status) values('Завершено');


insert into stages (name, "projectId", "statusId") values('Этап 1', 1,2);
insert into stages (name, "projectId", "statusId") values('Этап 2', 1,1);
insert into stages (name, "projectId", "statusId") values('Этап 1', 2,1);
insert into stages (name, "projectId", "statusId") values('Этап 1', 3,1);
insert into stages (name, "projectId", "statusId") values('Этап 1', 4,2);

insert into stage_descs (name, "stageId") values('Описание 1', 1);
insert into stage_descs (name, "stageId") values('Описание 2', 2);
insert into stage_descs (name, "stageId") values('Описание 3', 3);
insert into stage_descs (name, "stageId") values('Описание 4', 4);
insert into stage_descs (name, "stageId") values('Описание 5', 5);

update stages set "stageDescId" = 1 where id = 1;
update stages set "stageDescId" = 2 where id = 2;
update stages set "stageDescId" = 3 where id = 3;
update stages set "stageDescId" = 4 where id = 4;
update stages set "stageDescId" = 5 where id = 5;

insert into reports (description, path, "isEmployer") values('Отчёт 1', '10. журнал общих работ\ОЖР.pdf',true);
insert into reports (description, path, "isEmployer") values('Отчёт 2', '10. журнал общих работ\ОЖР.pdf',false);
insert into reports (description, path, "isEmployer") values('Отчёт 3', '7. паспорта и сертификаты\2. Сертификаты  стойки ДЗ и опоры СКЗМК освещения.pdf',true);

insert into stage_reports ("stageId", "reportId") values(1, 1);
insert into stage_reports ("stageId", "reportId") values(1, 2);
insert into stage_reports ("stageId", "reportId") values(2, 3);

insert into documents (description, path) values('Документ 1', '7. паспорта и сертификаты\2. Сертификаты  стойки ДЗ и опоры СКЗМК освещения.pdf');
insert into documents (description, path) values('Документ 2', '7. паспорта и сертификаты\2. Сертификаты  стойки ДЗ и опоры СКЗМК освещения.pdf');
insert into documents (description, path) values('Документ 3', '7. паспорта и сертификаты\2. Сертификаты  стойки ДЗ и опоры СКЗМК освещения.pdf');

insert into stage_desc_documents ("stageDescId", "documentId") values(1, 1);
insert into stage_desc_documents ("stageDescId", "documentId") values(1, 2);
insert into stage_desc_documents ("stageDescId", "documentId") values(2, 3);

insert into templates (title, description) values('Шаблон 1', '18. КОМПЛЕКТ\образец ИД.pdf');
insert into templates (title, description) values('Шаблон 2', '18. КОМПЛЕКТ\образец ИД.pdf');
insert into templates (title, description) values('Шаблон 3', '9. схемы одд.pdf');

insert into template_stage_descs ("stageDescId", "templateId") values(1, 1);
insert into template_stage_descs ("stageDescId", "templateId") values(1, 2);
insert into template_stage_descs ("stageDescId", "templateId") values(2, 3);