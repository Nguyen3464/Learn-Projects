# Rails RESTful Routes and CRUD Actions

    ## Learning Objectives

        - Understanding the Rails convention for creating routes and controller methods
        - Understanding the anatomy of a rails route
        - Understanding the roll of controller methods and routes in creating full CRUD capability
        - Further exploring Rails conventions and Rails "magic"

    ## Vocabulary
        
        - CRUD: Philosophy
        create
        - read
        - update
        - delete
        CRUD are developer methodoligy that insuring these actions are avalible in the code
        - HTTP Verbs: Request
            - get --> index, show, new, edit
            - patch --> update
            - post --> create
            - put --> update
            - delete --> delete
        - RESTful routing: representaional state transfer, a conventional pattern used in MVC archetecture.
        - index
        - show
        - controller actions: Methods
            - index: index will interact with database and return a list of all the things
            - show: show gives us the details of one thing
            - new: forms take use userimput
            - create: creates new content to the database
            - edit forms take use userimput
            - update: udates exisiting data
            - destroy: removes exsisting data