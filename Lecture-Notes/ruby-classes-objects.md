# Ruby Classes and Methods

    ## Vocabulary

        Ruby classes: class is the keyword used to define  a class.  Classes uses PascaleCaseing
        do, def, class all have an end. end defines the scope of the class
        PascalCase

        instantiation: instatiation is creating a class

        instance variables: istance variable belongs to a class and is used to refrence a class @ symbol

        getter method: allow is to get data within the class

        setter method: allows to set key:values blue prints for classes to make instances of objects

        initialize method: initalizer is a special type of method that takes in parameter, allows the .new to take parameters

        Attribute Accessor method to help refactor the code.  attr_accessor --> to make more methods by passing a symbol of our instance variable, we get a getter and a setter for that variable

    ## Class Syntax

        class AppleTv // defining a class variable
        end // ending class variable

        p AppleTv.new // instatiating a class


    ## Class

        -clases need somthing to do
            1. hold data in our class
            2. retrieve data that we've set
            3. getting and setting

        class AppleTv
        end

        p AppleTv.new 
        - output: #<AppleTv:00#$@#RFWD@#$>
            // classes create objects, each instance is its own entity or object.

    ## Instance variable    

        appleTv = AppleTv.new // saving new object to a variable
        p appleTv
        - output: #<AppleTv:00#$@#RFWD@#$>

    ## Setter

        class AppleTv
            def set_show_data(title) //parameter
                @title = title // storeing instance variable in title
            end
        end

    ## Using Class

        appleTv = AppleTv.new
        appleTv.set_show_Data('Ted Lasso') //call method and pass title
        p appleTv
        - output: #<AppleTv:00#$@#RFWD@#$ @title="Ted Lasso">

    ## Adding More Key:Value to Class

        class AppleTv
            def set_show_data(title, actor) //parameter
                @title = title 
                @actor = actor
            end
        end

            appleTv = AppleTv.new
            appleTv.set_show_Data('Ted Lasso', 'Jason Sudekis')

            p appleTv
            - output: #<AppleTv:00#$@#RFFDSFSDG532WD@#$ @title="Ted Lasso", @actor="Jason Sudekis>

    ## Getter

        class AppleTv
            def set_show_data(title, actor) //parameter
                @title = title 
                @actor = actor
            end

            def get_title
                @title
            end

            def get_title
                @actor
            end
        end

    ## Use Data from Getter

        show = AppleTv.new
        show.set_show_data('Fantasy Island', 'Eva Mendez')

        p show // give whole object
        p show.get_title // returns single key:value
        p show.get_actor
        - output: 'Eva Mendez'

    ## Initializer

        class AppleTv
            def initialize(title, actor) // built in setter
                @title = title 
                @actor = actor
            end

            def get_title
                @title
            end

            def get_title
                @actor
            end
        end

        show = AppleTv.new('Fantasy Island', 'Eva Mendez')

        p show.get_title
        p show.get_actor
        - output: 'Fantasy Island'
                  'Eva Mendez'
    
    ## Modify Instance Variable

        class AppleTv
            def initialize(title, actor) // built in setter
                @title = title 
                @actor = actor
            end

            def get_title
                @title
                @watched = false // default value doesnt need to be passed though parameter 
            end

            def get_title
                @actor
            end

            def has_watched // defining a method to update @watched value to true
                @watched = true
            end
                
            def show_data
                if @watched //(if @watched) its asking if its true if there is no relational operators
                    "you have watched #{@title}, staring #{@actor}"
                else
                    "you have not watched #{@title}, staring #{@actor}"
            end
        end

        show = AppleTv.new('Fantasy Island', 'Eva Mendez')

        p show.get_title
        p show.get_actor
        - output: 'Fantasy Island'
                  'Eva Mendez'

        new_show = AppleTv.new('I love Lucy', 'Luccile Ball')

        p new_show.show_data
        - output: " you have not watched I love lucy, staring Luccile Ball"

        p new_show.has_watched // updates the object
        p new_show.show_data
        - output: true
                  "you have watched I love lucy, staring Luccile Ball"

    ## Attribute Accessor 

        class AppleTv
            attr_accessor :title, :actor, :watched // instance variables --> not parameters they are symbols of the instance variable we want getter/setter for
            def initialize(title, actor) 
                @title = title 
                @actor = actor
                @watched = false
            end
                
            def show_data
                if @watched //(if @watched) its asking if its true if there is no relational operators
                    "you have watched #{@title}, staring #{@actor}"
                else
                    "you have not watched #{@title}, staring #{@actor}"
            end
        end

    ## Manipulating show

        show4 = AppleTv.new('Insecure', 'Issa Rae')

        p show4.title
        - output: 'Insecure'

    ## reassiging values

        show4.title = 'Living Single'

        p show4.title
        - output: 'Living Single'

        p show4.show_data
        - output: 'you have not watched show 

    ## change value of watched
        p show4.watched = true
        p show4.show_data
        - output: ' you have watched Living single, Starring Issa Rae"
        
    

