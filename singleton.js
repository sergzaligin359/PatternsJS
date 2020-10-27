class Db {
    

    constructor(){
        if(Db.ex) {
            console.error('Exemp exists', Db.ex);
        }else{
            Db.ex = this;
        }
    }

    connection(n){
        console.log('Db connection success...' + n);
    }
}

const db = new Db;
const db2 = new Db;
db.connection(1);