# Ruby Inheritance

    ## Notes

        - Everything in Ruby is an object
        - Initialize: initialize declares new instances of Classes with Unique data.  It takes parameters
        - attr_accessor: creates a getter and a setter method for the instance variable that it gets passed
        - inheritance: inheritance allows comonality of classes to be grouped into a over arching class, where information can be passed from Superclass/parentclass to the subClass/childclasses

    ## Initialize Method with attr_accessor

        class Hulu

            attr_accessor :title, :actor, :watched
            
            // special setter method
            def initialize(title, actor)
                @title = title
                @actor = actor
                @watched = false
            end

            // getter method
            def show_data
                if @watched
                    "you have watched #{title} starring #{actor}"
                else
                    "you have not watched #{title}, starring #{actor}"
                end
            end
        end

    ## Inheritance

        - inheritance allows comonality of classes to be grouped into a over arching class, where information can be passed from Superclass/parentclass to the subClass/childclasses
        
        - streaming video: HBOMax, Netflix
        - streaming music: Pandora, Apple Music
        - streaming multimedia: Youtube

        - what features do these have in common?
            - title, runtime, completed, liked

    ## Super class

        class streamingApp

            attr_accessor :title, :runtime, :completed, :liked

            def initialize(title, runtime)
                @title = title
                @runtime = runtime
                @completed = false
                @liked = nil
            end

            def app_data
                if @completed
                    "you have completed #{@title} which is #{@runtime}"
                else
                    "you have not completed #{@title} which is #{@runtime}"
                end
            end
        end

    ## SubClasses

        - child classes use the method super()
        - the initialize invokes a superClass, which pulls from the initializer from the superclass and borrows the superClass's parameters, and all values present in parent

        // use PascalCase when defining a class and the syntax to call a super calss is  < superClassVariableName
        
        class YouTube < StreamingApp
            
            def initialize(title, runtime, subscriber, channel)

                // when creating a new instance we need to pass unfor back up to the the superClass that corrisponds with the two

                super(title, runtime)
                @creator = creator
                @channel = channel
            end
        end

        video = Youtube.new("How to Code", "5 hrs", "Ray", "Everyone Loves Ray")

        p video
        - output: #<4134235235 @title=""How to Code", @runtime="5 hrs", @creator="Ray", @channel="Everyone Loves Ray", @completed=false, @liked= nil>

        p video.app_data
        - output: "you have not completed How to Code which is 5 hr"

        p video.title
        - output: "how to code"

        p video.completed
        - output: false

        video.completed = true
        p video.completed
        - output = true

        p video.app_data
        - output: "you have completed How to Code which is 5 hr"



