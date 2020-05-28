new Vue({
    el:'#vue-app',
    data:{
        name:'shaun',
        job: 'ninja',
        website: 'http://fmlftw.atwebpages.com',
        websiteTag:'<a href="http://fmlftw.atwebpages.com">fmlftwcomic</a>',
        age:34,
        x:0,
        y:0,
        name2:'',
        age2:''
    },
    methods: {
        greet:function(time){
            let name = this.name;
            return 'Good '+time +' '+ name;
        },
        add:function(num){
            return this.age+=num;
        },
        subtract:function(num){
            return this.age-=num;
        },
        update:function(event){
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click:function(){
            alert('you are now officially hacked :3');
        },
        logName:function(){
            console.log('watver');
        },
        logAge:function(){
            console.log('watve adf adf adsf r');
        }
    }

});