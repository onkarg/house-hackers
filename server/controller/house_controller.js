module.exports ={
    getUsers: ( req, res, next ) => {
        const db = req.app.get('db');
    
        db.get_users()
          .then( user => res.status(200).send( user ) )
          .catch( () => res.status(500).send() );
    },
    getHouses: ( req, res, next ) => {
        const db = req.app.get('db');
    
        db.get_houses()
          .then( houses => res.status(200).send( houses ) )
          .catch( () => res.status(500).send() );
    }
}