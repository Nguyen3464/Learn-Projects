# Ruby

    -Dynamic dynamically typed, variables don't care about the data they are holding when decalred
    -Ruby is General purpose scripting language
    -Interpreted language means the code is read line by line through an interpretor
    -Ruby does not support type coersion
    -Open sourced code base
    -OOP object oriented everything is an object, or a instance of a class
    -Scripting language makes evauation and makes an execution, it is code for logic

Ruby terminal command
    -$ ruby -v: logs the current version of ruby being ran
    -$ irb: (iteractive ruby) runtime runs ruby console or REPL "read evaluate print loop", acts as console dev tool in browser.  The information doesn't get saved but you can run code to learn
    -$ exit: exits irb console

### Integer
    
    -class integer are whole numbers that you can preform arithmatic on, +, -, *, /, % ,** --> you can only use whole numbers.  

### Float

    -class float are partial numbers. you need to insert --> 4.0 / 3 = 1.33

### String

    -string qoutes syntax: '  '  single qoute syntax are the base line. you can use " " if you want to use single qoutes inside string ex:    "can't"

### Boolean

    -ture and false boolean are their own class.  Use equality operators for evaluations.  == "===" in JS. Ruby doesn't support type coersion, so no === in Ruby
    Equality Operators: >, <, >=, <=, !=(negation), ==
    Logical Operators: &&, ||
    Relational Operators: 

### Nil

    -Nothing else equal to in the program,  similar to Null in JS

### Symbols

    -Keys

### Varaiables

    -there are no var, let, const
    -snake_case : all words lower case and are connected with underscore
    my_name = 'Nguyen'

### String Interpolation 

    String Interpolationsyntax: "Hey, there #{my_name}" --> Hey, there Nguyen

### Built in Methods

-Ruby methods by defult are accessors and do not mutate the variable
-redefine the variable if you need the value changed --> my_name = 'Nguyen' --> my_name = 'Dinh'
-Another way to mutate is to add the bang operator to the end my_name.reverse! --> Neyugn

    -.length: my_name.length --> finds length of string
    -.upcase: my_name.upcase --> uppercases all the characters
    -.capitalize: my_name.capitalize --> uppercases first character
    -.delete: my_name.delete('n') --> deletes character
    -.include?: my_name.include?('n' && 'g') --> asks if string includes character and returns boolean.
    -.class: my_name.class --> String is a class because it follow PascaleCase
    -.to_s: changes a integer to a string
    -.to_i turns a string to an integer

### Arrays

-array methods are accessor
-to mutate an array, target a value at index and reassign it --> my_array[2] = 9
-another method my_array <<  shovel method acts like push in JS. pushing element to end of array

    -array are similar to JS array
    -to index from right to left pass in a negative value my_array[-1]
    -my_array.first --> gives first value at index 0
    -my_arary.last --> last gives the last value at index
    -my_array[2] --> gives value at index 2
    -my_array.reverse --> reverses an array
    -my_array.reverse.first --> reverses array then returns first value at index[0]
    -

### Ruby @ VScode

    -file.rb
    -comment in ruby files is # This comment will be man_readable
    -to run code in console --> ruby file_name.rb
    -$ put variable_name: logs string in console, shows raw data
    -$ p variable_name: better for troubleshooting. but dont leave puts or p in your code, p shows the class type