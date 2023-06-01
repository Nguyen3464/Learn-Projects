# Ruby Blocks

### Iterables

    ## Iteration

        -repeating an action until a condition is met

    ## Types of Iteration

    ## While Loop

        - the While loop requires a starting value, and loops until a condition is met

        number = 1 --> starting value
        while (number < 8) // (number < 8) --> condition
            p number
            number = number +1 --> updater
        end

    ##  While Loop Syntax

        number = 1
        while number < 8
            p number
            number = number + 1
        end
        - output: 1, 2, 3, 4, 5, 6, 7

///////////////////////

        -another example

        nums_array = []
        num = 1
        while num <= 23
            num_array << num
            num += 2
        end

        p num_array
        - output: [1, 3, 5 ,7, 9, 11, 13, 14, 17, 19, 21, 23]

    ## Blocks

        -blocks are code functionalities that get passed to a method
        -they are defined with do and end keywords
        -another way to define blocks are  {} --> curly braces are reserved for one line of code
        
        -object.method do // --> do is the start of the block
        -code statement // --> what code will be executed
        -end // --> end of the block

    ## Times

        -times is a method that will repeat the code a certain number of times

    ## Times Syntax

        my_number = 8
        my_number.times  do
            p 'Polyglots! // --> printing one liners can be refactored
        end
        - output: "Polyglots"
                  "Polyglots"
                  "Polyglots"
                  "Polyglots"
                  "Polyglots"
                  "Polyglots"
                  "Polyglots"
                  "Polyglots"

    ## Times Syntax one liner refactor

        my_number.times {p 'Polyglots'}


    ## Each

        -method requires a list such as an object or and array to determine the ending condition
        -to access the elements of the list you will need to use a special syntax called pipes ||, pass value or index betwen pipes
        -each is a accessor and will not mutate an array
    
    ## Each Syntax

        emojis = ['🍍', '🎄', '🌺']

        emojis.each do |value|
            p value
        end

        p emojis
        - output: '🍍'
                  '🎄'
                  '🌺'
        
        emojis.each do |value|
            p "The #{value}, emoji has been passed to the block"
        end
        p emojis
        - output: "The 🍍, emoji has been passed to the block"
                  "The 🎄, emoji has been passed to the block"
                  "The 🌺, emoji has been passed to the block"

    ## Map

     ## Map Syntax

        jump_start = ['Will', 'Gene', 'Nicole']

        reward = jump_start.map do |value|
            value + "🏆"
        end
        // to see the new array use map operation in a variable called rewards or with bang operator ! after the method 
        p reward
        - output: ['Will🏆', 'Gene🏆', 'Nicole🏆']

        /////////////////////////

        jump_start.map! do |value|
            value + "🏆"
        end

        p jump_start
        - output: ['Will🏆', 'Gene🏆', 'Nicole🏆']

    ## Range

        (1..10).each do |value|
            p value
        end
        - output:1
                 2
                 3
                 4
                 5
                 6
                 7
                 8
                 9
                 10

        //////////////////////////

    ## Convert Range to an array

        ('a'..'g').to_a
        - output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']

        (1..10).to_a
        - output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
