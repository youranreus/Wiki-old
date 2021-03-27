/**
 * @author 季悠然
 * @date 2020-12-13
 */

let app = new Vue({
   el: '#main',
   data:{
       title: '季悠然のWiki',
       apiUrl: 'https://i.exia.xyz',
       header_nav:  [
           {
               name: "默认",
               url: '/c/默认'
           },
           {
               name: "杂项",
               url: '/c/杂项'
           },
           {
               name: "开发日志",
               url: '/c/开发日志'
           },
       ],
       WikiList:[],
       WikiDetail: {
           title: '这里是季悠然のWiki哒',
           cate: '默认',
           author: '季悠然',
           date: 'now',
           contents: '左边是目录噢'
       },
       currentPage: 1
   },
    methods:{
        getDetail: function($event){
            let that = this;
            that.$nextTick(() => {
                console.log(that.apiUrl+'/wiki/getWikiDetail/'+$event.currentTarget.id+'?key=1234567');
                axios.get(that.apiUrl+'/wiki/getWikiDetail/'+$event.currentTarget.id+'?key=1234567')
                    .then((response)=>{
                        that.WikiDetail = response.data[0]
                        that.WikiDetail.contents = marked(that.WikiDetail.contents)
                    })
            })

        }
    },
    created(){
        let that = this;
        axios.get(that.apiUrl+'/wiki/getWikiList/'+that.currentPage)
            .then((response)=>{
                that.WikiList = response.data;
            })
    }
});