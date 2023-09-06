# json_creator
Application for create jsons out of string lists;
Remove the spaces and numbers;
Create json file;
-
example:
-
dataConfig = {
    column: "Name",
    data: 
    //all the data go inside this template string
    "
    1	Miguel	1	Sophia
    2	Davi	2	Alice
    3	Arthur	3	Julia
    4	Pedro	4	Isabella
    5   Gabriel	5	Manuela
    6	Bernardo	6	Laura
    7	Lucas	7	Luiza
    8	Matheus	8	Valentina
    9	Rafael	9	Giovanna
    10	Heitor	10	Maria Eduarda
    "
}
-
To:
-
{
    "column": "Name",
    "data": [
        "Miguel",
        "Sophia",
        "Davi",
        "Alice",
        "Arthur",
        "Julia",
        "Pedro",
        "Isabella",
        "Gabriel",
        "Manuela",
        "Bernardo",
        "Laura",
        "Lucas",
        "Luiza",
        "Matheus",
        "Valentina",
        "Rafael",
        "Giovanna",
        "Heitor",
        "Maria",
        "Eduarda"
        ]
}
