Detailed Setup Steps: 
    1. Initial Setup
        Node: (Node must be installed first)
            Download Node.js from nodejs.org/en/download.
            Install Node.js using the appropriate installer.
        Vue: (You must have node installed first)
            Start CMD anywhere.
            Run the following command in CMD to install Vue: 
                'npm install -g @vue/cli'
            Once it is done running, close this instance of CDM.
        Project Folder:
            Create a Folder where you wish to store the project locally.
            
    2. Pull Project from Gitlab in this folder. 
        Connect to the School VPN or do this step while on the campus network.
        Open Gitbash in the folder created in step 1. 
        Run the following command in GitBash: 
            'git clone git@gitlab.ecs.csus.edu:yang/Fall19_CSC190_S4_SteakHolders'
    
    3. Server 
        Navigate into Server folder. 
        Run CMD in this folder. (Make sure you are in the right directory in CMD.) 
        Enter the following Command in CMD (This setsup the required dependencies): 
            'npm i'
        After the above is done running, you are set up and can run the server. 
        Enter the following command in CMD (This starts the server) 
            'npm run start'
        Keep CMD open while you set up the rest.  
        At this point your Server side logic is setup.

    4. Client
        Navigate into client Folder. 
        Run CMD in this folder. (Make sure you are in the right directory in CMD.) 
        Run the same command as before to setup. 
            'npm i'
        Then after that is done running, enter the following command.
            'npm run serve'
        At this point the Client side logic is set up. 
    
    5. Test 
        Open Chrome/Firefox/ect.
        Enter the following:
            http://localhost:8080/
        At this Point you should have a website with two buttons. 

    6. Post-Setup
        Review the code and the various pages. 
        Ask questions about anything you don't understand right away. 
        Most files can be ignored initially. 
        Files to focus on. 
            server/index.js
            client/src/main.js
            client/src/App.vue
            client/src/request.js
            client/src/components/HelloWord.vue

Technologies being used in project: 
    Server: 
        Node.js (For server)
            Libaries: 
                'express'               (Handels one-way communication FROM backend TO frontend)
                'express-fileupload'    (Handles uploading files to the server)
                'cors'                  (Helps with security issues for setup. Ignore for now)
    Client: 
        Vue.js (For client)
            HTML & CSS (Layout and style is done within Vue files)
            Libraries: 
                'axios'                 (Handles one-way communication FROM frontend TO backend)
            
Git Review: 
    Git setup:
        install Vs code:
            https://code.visualstudio.com/
        install git:
            https://git-scm.com/
    
    notable git commands:(Some Please add as learned)
        git add  <file name>, <another file name>       //add one or multiple files
        git add .                                       // stages all files for commit
        git rm <file name>                              //removes the file from repository
        git commit -m "message to commit"               // always write a short but useful commit message
        git pull                                        //pulls newest uploaded version
        git push                                        //uploads commited files to github
    
    Order of operations:
        add                     // stage files to be committed
        commit                  // commits changes also adds small note / comment on what was done
        pull                    // pull to ensure that there are no conflicts with current version on git
                                // if conflicts occur fix and start process over (add, commit, and pull) 
        push                    // once all conflicts resolved push your code to master branch.

