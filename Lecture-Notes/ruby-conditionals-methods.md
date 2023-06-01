# Ruby Conditionals and Methods

### Ruby Methods

    - Functions in Ruby belong to objects, the objects hold the code for the logic.  functions are called Methods in Ruby

    
 ### Method
 
    ## use keywords def and end

        -if: keyword
        -else: keyword
        -elsif: keyword
        -def:  defines the method,
        -every def has a corresponding end
        -method call
        -implicit return: will output the last line, return keyword is not necessary like is Javascript
        -run code with $ ruby file_name

        def echo_message  // defining method or function
            p "Aloha, Echo, what's your slogan?" // code here
        end // closing tag to def

        p echo_message // method call
        - Output: "Aloha, Echo, what's your slogan?"

    ## Method Syntax 

        def my_message
            response = 'Delta21 became a Full Stackers'
            p response
        end

        my_message
        - output: 'Delta21 became the Full Stackers'

        p response
        - output: error message --> variables defined in code block have local scope

    ## More Example

        def greeter
            p 'hello Bravo!'
        end

        p greeter
        - output: 'hello Bravo'
    
///////////////////////////////
        
        def greeter(name)
            p "hello #{name}!"
        end

        p greeter('Mark')
        - output: 'hello Mark'

/////////////////////////////////

        def multiply(num1, num2)
            num1 * num2
        end

        p multiply(3, 5)
        - output: 15

    ## Conditionals with Methods

        def bigger_number(num1, num2)
            if num1 > num2
                "#{num1}, is bigger than #{num2}"
            elsif num1 < num2
                "#{num2}, is bigger than #{num1}"
            else
                "#{num1}, and #{num2} are equal!"
            end
        end

        p bigger_number(36, 49)

    ## conditionals with Methods and user input

        puts 'Enter your name:'
        user_name = gets.chomp
        p user_name
        
        puts 'Enter your age:'
        user_age = gets.chomp.to_i
        p user_age

        def can_you_vote(name, age)
            if age >= 18
                "hi #{name}! #{age}, is old enough to vote!"
            else
                "hi #{name}! #{age}, is not old enough to vote!"
            end
        end

        p can_you_vote(user_name, user_age)

### Methods with Arugument

    ## String interpolation

        - "#{variable_name}"

        - def message (name) // parameter of name
            "Aloha, #{name}!"
        end

        p message('Echo Cohort') // method call with and argument of 'Echo Cohort'
        - output: 'Aloha, Echo Cohort!'

//////////////////////////////

        def flower_up(name1, name2)
            "#{name1} 🌺 #{name2}"
        end

        p flower_up('Austin', 'Nicole')
        - output: 'Austin 🌺 Nicole'

### Conditionals 

    -evaluations will not be in parenthesis and the code blocks are in curly braces, pay attention to indentation

    ## if/else statements

        - if/else statements are bianary conditioonal,  if begins the conditional, every if has one end, only one if per conditional

        - else is the catch-all, and only one per conditional statement

    ## if/else statement Syntax

        - def wwe_smack (wrestler)
            if wrestler == 'The Rock'
            p 'Can you smell what the Rock is cooking'
            end
          end

          wwe_smack('The Rock')
          - output: 'Can you smell what the Rock is cooking'

          wwe_smack('Stone Cold')
          - output: nothing occurs because we do not have a true condition to over this argument

/////////////////////////
    ## Else

        - def wwe_smack (wrestler)
            if wrestler == 'The Rock'
                p 'Can you smell what the Rock is cooking'
            else
                p 'Sorry that person has be censorerd'
            end
          end
          
          wwe_smack('Stone Cold)
          - output: 'Sorry that person has be censorerd'

///////////////////////////////////

    ## Elsif

        -else if keyword, allows for additional evauations

        - def wwe_smack (wrestler)
            if wrestler == 'The Rock'
                p 'Can you smell what the Rock is cooking'
            elsif wrestler == 'Macho Man'
                p 'Ohhhhhhhh yeahhhhhh'
            elsif wrestler == 'Nature Boy'
                p 'Wooooooooooo!'
            else
                p 'Sorry that person has be censorerd'
            end
          end
        
        wwe_smack('Macho Man')
        - output: 'Ohhhhhhhh yeahhhhhh'
    
### Getting user input from the terminal

    -content from the terminal will always be a string class

    ## gets

        -gets is the keyword that stops the program and allows user to provide input data
        -store in a variable to get use data later
    
    ## gets syntax

        your_name = gets // stores get in your_name variable
        p "#{you_name}, give me your age to determine your wrestler costume"

////////////////////////////////

    ## gets with .chomp method

        - ruby file_name
        - user gives input Namier
        - 'Namier\n, give me your age to determine your wrestler costume'
        - ruby reads the enter key after user provides Namier(enterKey)
        - .chomp --> removes any non-string character
        - provide a prompt for user to know what to input

        p 'Whats is your name'
        your_name = gets.chomp
        p "#{you_name}, give me your age to determine your wrestler costume"
        - output: 'Namier, give me your age to determine your wrestler costume'

////////////////////////////////

    ## more examples

        my_name == 'Nguyen'

        if my_name == 'Nguyen'
            p 'hey there Nguyen'
        else
            p 'hey there #{my_name}'
        end

    ## gets

        my_name = gets
        p my_name

    ## .chomp

        p 'what is your name?'
        your_name = gets.chomp
        p "thank you for being a polyglot, #{your_name}!"
        -$ jose
        - output: "thank you for being a polyglot jose!

        my_name = gets.chomp
        p my_name

        if my_name == 'Trish'
            p 'hi there Trish'
        else 
            p "hey there, #{my_name}"
        end


///////////////////////////////////
    ## p vs puts

        p: p 'what is your name?'
        - output: "raw data" 'what is your name?'
        puts: put 'what is your name?'
        - output: what is your name?




