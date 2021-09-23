let app = new Vue({
    el: '#app',
  
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        selectedContact : 0,
        message : '',
        search : '',
        
    },

    methods: {
        /**
         * Create a path to the image.
         * @param {object} object The object from where to extract the necessary info.
         * @returns A string which represtents the path to the image.
         */
        imagePathCreator : function(object){
            return  `img/avatar${object.avatar}.jpg` ;
        },

        selectContact : function(index){
            this.selectedContact = index
            console.log(app.selectedContact)
        },

        /**
         * Creates an object which contains all the info(date,text,status)
         * and push it into the selectedContact messages array.
         */
        sendMessage(){  

            const messageToAdd = {
                
                date: this.getCurrentDate(),
                text: this.message,
                status: 'sent'
            }
            
            if(this.message.trim() != '') {
                this.contacts[this.selectedContact].messages.push(messageToAdd)
                setTimeout(this.replyToTheMessage, 1000);
            } 
            this.message = ''
            //Check
            console.log(this.contacts[this.selectedContact].messages)
        },
        
        /**
         * Replies to the sent message creating a new object
         * which contains all the info(date,text,status).
         */
        replyToTheMessage(){

            const messageToAdd = {
                
                date: this.getCurrentDate(),
                text: 'ok',
                status: 'received'
            }

            this.contacts[this.selectedContact].messages.push(messageToAdd)
            console.log(this.contacts[this.selectedContact].messages)
        },

        /**
         * @returns A string with the date and time the function has been called.
         */
        getCurrentDate(){
            
            let currentDate = new Date()
            currentDate = `${currentDate.getDate()}/${(currentDate.getMonth()+1)}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
            return currentDate
        },

        searchContact(){
            
            console.clear()
            for(item of this.contacts){
                item.visible = item.name.toLowerCase().includes(this.search.toLowerCase().trim())
                // Check
                console.log(item.name, item.visible)
            }
        },
        
        deleteMessage :function(index){
        
            this.contacts[this.selectedContact].messages.splice(index, 1)
            //Check
            console.log(this.contacts[this.selectedContact].messages)
        }        
    },
});

 // searchContact(item){
            
    //     const names = []
    //     for(index of this.contacts){
    //         names.push(index.name)   
    //     }
    //     console.log(names)
        
    //     return item.name.toLowerCase().includes(this.search.toLowerCase())

    // },