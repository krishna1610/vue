const TV = new Vue({
    el:'#TV',
    data:{
        appName:'TV Maze',
        search_:'',
        data:[],
        name:'',
        info:[]

    },
    
    methods:{
        // Search Method declaration
        //Search method finds for the people with the name that we have entered in the seach bar.
        search: async function(){
            const response = await axios.get(`http://localhost:8888/api/search/`+this.search_);
            const response_data=response.data
            for(let i=0;i<response_data.length;i++){
                this.data.push({"name":response_data[i].person.name,"id":response_data[i].person.id})
            }
        },
        // Fetch Method declaration
        // Once the person is found then his/her information is fetched using the ID associated with that name of person.
        fetch: async function(name){
            this.name=name
            const response = await axios.get(`http://localhost:8888/api/fetch/`+this.name);
            //for null data
            console.log(response.data.id)
            if(response.data.country===null){
                this.info.push({"NA":"Sorry, Person information is Not Available....!!"})
            }
            else{
            this.info.push({"name":response.data.name,"country":response.data.country.name,
            "birthday":response.data.birthday,"gender":response.data.gender,"img":response.data.image.medium})
            }
        },
        // Reboot Method declaration
        // As usual, reboot method terminates this search and then it will start the process again from search method 
        // explained above.
        reboot:async function(){
            this.search_=''
            this.data=[]
            this.name=''
            this.info=[]
        }
    }
})