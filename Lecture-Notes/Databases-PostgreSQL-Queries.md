# Databases PostgreSQL Quries

    ##Learning Objectives
        
        Conceptualize the concept of a relational database
        
        Recognizing the similarity between database schemas and classes
        
        Recognizing the similarity between database instances and objects
    
    ##Vocabulary

        SQL:

        PostgreSQL: PostgresSQL is a relational database

        schema:

        tables, rows, columns: 

        relational databases: relational databases are used to evaluate relations and consists of rows columns

        database tables:

        primary key:

        Model:  model is the class name

    ## Databases

        - model: is the class name

        - databases consist of rows and columns

        - rows: each row is an object and an instance of a class

        - columns: 

        - primary key id: primary key is the unique identifier for each object in the database
        
        $ psql \l

    ## PostgresSQL

        - SQL: domain, database language that talks to databases

        - PostgresSQL: postgresSQL is open source, obbject-rellational database management system (ORDMS)
        it uses object orientated programming

        - Check out SQL KEYWORD refrences online

        - Quiries: 
          SELECT * --> all 
          SELECT --->columnNames, 
          FROM --->modelName
          WHERE -->anotherFilter KEYWORD in the WHERE clause
          AND -->anotherFilter KEYWORD in the AND clause
          OR -->anotherFilter KEYWORD in the OR clause

          LIKE KEYWORD --> WHERE continent LIKE '%America' LIKE KEYWORD is in WHERE clause

          % is wild card that looks for anything labels with 'America' ex North American, South America

          ORDER BY columnName DESC --> gives order by descending value, DESC is KEYWORD is in the ORDER BY clause
          LIMIT --> gives a defined return
          IS NOT --> KEYWORD is in the WHERE clause
          
    ## WHERE clause operators

          =, !=, >, <, >=, <=, BETWEEN, LIKE, and IN, NOT, AND, OR.


        - output will return in the order of the table unless specified

        



        