insert into employers (name,email,password) values('Заказчик Петр','test@mail.ru','$2a$05$D.ByGcniVog3oB/rTAQA9O9NLA4sR3R.UynM5GkErWoUm/rszE.u6');
insert into employers (name,email,password) values('Заказчик Василий','test1@mail.ru','dcdfefjoqdafqwqj');


insert into employees (name,phone,email,password) values('Исполнитель Геннадий',89898989898 ,'test2@mail.ru','vdwegbr');
insert into employees (name,phone,email,password) values('Исполнитель Андрей',null,'test3@mail.ru','vwegdzcbr');
insert into employees (name,phone,email,password) values('Исполнитель Александр',null,'test4@mail.ru','adewge');
insert into employees (name,phone,email,password) values('Исполнитель Иван',null,'test5@mail.ru','faffdac');
insert into employees (name,phone,email,password) values('Исполнитель Дмитрий',null,'test6@mail.ru','fafdgwe');
insert into employees (name,phone,email,password) values('Исполнитель Михаил',null,'test7@mail.ru','affwaf');

insert into projects (name, "employeeId", "employerId") values('Установка элементов обустройства автомобильных дорог', 2,1);
insert into projects (name, "employeeId", "employerId") values('Установка металлического барьерного ограждения', 3,1);

insert into statuses (status) values('Ожидание');
insert into statuses (status) values('В процессе');
insert into statuses (status) values('Завершено');


insert into stages (name, "projectId", "statusId") values('Договор и техническое задание', 1,3);
insert into stages (name, "projectId", "statusId") values('Назначение ответственных лиц', 1,3);
insert into stages (name, "projectId", "statusId") values('Согласование материалов', 1,2);
insert into stages (name, "projectId", "statusId") values('Паспорта и сертификаты', 1,1);
insert into stages (name, "projectId", "statusId") values('Проект производства работ', 1,1);
insert into stages (name, "projectId", "statusId") values('Журнал работ', 1,1);
insert into stages (name, "projectId", "statusId") values('Акты по форме КС-2, КС-3', 1,1);
insert into stages (name, "projectId", "statusId") values('Акты по форме КС-6', 1,1);
insert into stages (name, "projectId", "statusId") values('Акт примерочной работы', 1,1);
insert into stages (name, "projectId", "statusId") values('Паспорт законченного объекта', 1,1);

insert into stage_descs (name, "stageId") values('Описание 1', 1);
insert into stage_descs (name, "stageId") values('Описание 2', 2);
insert into stage_descs (name, "stageId") values('Описание 3', 3);
insert into stage_descs (name, "stageId") values('Описание 4', 4);
insert into stage_descs (name, "stageId") values('Описание 5', 5);
insert into stage_descs (name, "stageId") values('Описание 5', 6);
insert into stage_descs (name, "stageId") values('Описание 5', 7);
insert into stage_descs (name, "stageId") values('Описание 5', 8);
insert into stage_descs (name, "stageId") values('Описание 5', 9);
insert into stage_descs (name, "stageId") values('Описание 5', 10);

update stages set "stageDescId" = 1 where id = 1;
update stages set "stageDescId" = 2 where id = 2;
update stages set "stageDescId" = 3 where id = 3;
update stages set "stageDescId" = 4 where id = 4;
update stages set "stageDescId" = 5 where id = 5;
update stages set "stageDescId" = 6 where id = 6;
update stages set "stageDescId" = 7 where id = 7;
update stages set "stageDescId" = 8 where id = 8;
update stages set "stageDescId" = 9 where id = 9;
update stages set "stageDescId" = 10 where id = 10;

insert into reports (description, path, "isEmployer") values('Отчёт 1', '10. журнал общих работ\ОЖР.pdf',true);
insert into reports (description, path, "isEmployer") values('Отчёт 2', '10. журнал общих работ\ОЖР.pdf',false);
insert into reports (description, path, "isEmployer") values('Отчёт 3', '7. паспорта и сертификаты\2. Сертификаты  стойки ДЗ и опоры СКЗМК освещения.pdf',true);

insert into stage_reports ("stageId", "reportId") values(1, 1);
insert into stage_reports ("stageId", "reportId") values(1, 2);
insert into stage_reports ("stageId", "reportId") values(2, 3);


insert into documents (description, path) values('ГК №3-20-ОБ.doc', '1.doc');   
insert into documents (description, path) values('Прил. №1 к контракту Техническое задание.pdf', '2.pdf');
insert into documents (description, path) values('Прил. №2 к контракту Ведомость объемов и стоимости работ.xls', '3.xls');
insert into documents (description, path) values('Прил. №3 к контракту График пр.р..xls', '4.xls');
insert into documents (description, path) values('Прил. №4 к контракту График финансирования..xls', '5.xls');

insert into stage_desc_documents ("stageDescId", "documentId") values(1, 1);
insert into stage_desc_documents ("stageDescId", "documentId") values(1, 2);
insert into stage_desc_documents ("stageDescId", "documentId") values(1, 3);
insert into stage_desc_documents ("stageDescId", "documentId") values(1, 4);
insert into stage_desc_documents ("stageDescId", "documentId") values(1, 5);

insert into templates (title, description) values('Строительно-монтажные работы', '');
insert into templates (title, description) values('Дополнительный шаблон', '');

insert into template_stage_descs ("stageDescId", "templateId") values(1, 1);
insert into template_stage_descs ("stageDescId", "templateId") values(1, 2);
insert into template_stage_descs ("stageDescId", "templateId") values(2, 3);