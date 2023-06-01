# Ruby

    ## Vocabulary

        -Ruby hash: Hashes are a collection of unique key:value pairs
        -Key: Keys are a unique identifier that is the data type of a symbol
        -Value: Values are associated withe the key or symbol and is a data type that is recognised by ruby
        -symbol
        -hash rocket: =>
        -CRUD: Create, Read, Update, and Delete
        -duck typing: "if it walks like a duck, and quacks, likes a duck... its a duck"
        -enumerable module: Enumerables are a grouping of things that are iterable
            -Arrays, Ranges, Hashes

    ## Hash Old Syntax

        Hash Rocket: --> =>
        Old Syntax:
        :keyName=> "valueName"

        crystal_gems = {
            gem1: "Pearl, 
            gem2: "Garnet", 
            gem3: "Amathyst", gem4: "Bismuth"
            }
        p crystal_gem
        - output: { 
            :gem1=> "Pearl, 
            :gem2=> "Garnet", 
            :gem3=> "Amathyst", :gem4=> "Bismuth"
            }

    ## Hash New Syntax

        variableName = Hash.new

        fusions = Hash.new
        p fusions
        - output: {} // empty hash

        CRUD: Create, Read, Update, and Delete

    ## Read: return data

        p crystal_data
        - output: { 
        :gem1=> "Pearl, 
        :gem2=> "Garnet", 
        :gem3=> "Amathyst", 
        :gem4=> "Bismuth"
        }

    ## Return: return specific data

        p crystal_gem[:gem2]
        - output: "Garnet"

    ## Create: We can create new content

        crystal_gems = {
        gem1: "Pearl, 
        gem2: "Garnet", 
        gem3: "Amathyst", gem4: "Bismuth"
        }

    ## Update: We can add or modify the data

        - crystal_gem[:gem5] = "Malachite"
        p crystal_gem
        - output: { 
        :gem1=> "Pearl, 
        :gem2=> "Garnet", 
        :gem3=> "Amathyst", :gem4=> "Bismuth"
        :gem5=> "Malachite"
        }

    ## Delete: removing content

        crystal_gem.delete(:gem5)
        p Crystal_gem
        - output: { 
        :gem1=> "Pearl, 
        :gem2=> "Garnet", 
        :gem3=> "Amathyst", 
        :gem4=> "Bismuth"
        }

        Modules: Modules are a grouping of things based on their similar properties

        Enumerables: Enumerables are a grouping of things that are iterable
            -Arrays, Ranges, Hashes

        Duck Type: "if it walks like a duck, and quacks, likes a duck... its a duck"

    ## Modifying Value

        crystal_gem[:gem3] = "Amethyst"
        p crystal_gem
        - output: :gem3=> "Amethyst"

    ## Modifying KEY 

        crystal_gem[:fusion] = crystal_gem.delete(:gem2)
        p crystal_gem
        - output: :fusion=> "Garnet"

    ## .each a hash

        stevens_life = {
            dad: "Greg"
            mom: "Rose Quartz"
            bestie: "Connie"
            home: "Beach City"
        }

        steven_life.each do |key, value|
            p "#{value}, is Steven's #{key}"
        end
        - output: "Greg is Steven's Dad"
                  "Rose Quartz is Steven's mom"
                  "connie is Steven's bestie"
                  "Beach City is Steven's home"

    ## .map a hash    

        def steven_uni hash
            hash.map do |key, value|
                "#{value}, is Steven's #{key}"
            end
        end
        
        p steven_uni(steven_life)
        - output: ["Greg is Steven's Dad",
                  "Rose Quartz is Steven's mom",
                  "connie is Steven's bestie",
                  "Beach City is Steven's home"]





        


