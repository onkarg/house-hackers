module.exports ={
    getUsers: ( req, res, next ) => {
        const db = req.app.get('db');
    
        db.get_users()
          .then( user => res.status(200).send( user ) )
          .catch( () => res.status(500).send() );
    },
    getProperties: ( req, res, next ) => {
        const db = req.app.get('db');
    
        db.get_properties()
          .then( properties => res.status(200).send( properties ) )
          .catch( () => res.status(500).send() );
    },
    createUser: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, email } = req.body
    
        db.create_user([ name, email])
          .then( user => res.status(200).send( user ) )
          .catch( () => res.status(500).send() );
    },
    createProperty: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, description, address, city, state, zip, img_url, loan, mortgage, rent, owner_id } = req.body
    
        db.create_property([name, description, address, city, state, zip, img_url, loan, mortgage, rent, owner_id])
          .then( property => res.status(200).send( property ) )
          .catch( () => res.status(500).send() );
    },
    getPropertyCount: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.get_properties_count( params.userId )
          .then( properties => res.status(200).send( properties ) )
          .catch( () => res.status(500).send() );
    },
    getUserProperties: ( req, res, next ) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.get_user_properties( params.userId )
          .then( properties => res.status(200).send( properties ) )
          .catch( () => res.status(500).send() );
    },
    getPropertyByQuery: ( req, res, next ) => {
        const db = req.app.get('db');
        const { query } = req;
    
         if (query.userEmail) {
            return db.get_properties_by_email([ query.userEmail ])
                .then( property => res.status(200).send(property) )
                .catch( () => res.status(500).send() );
        } else if (query.userFirstStart) {
            return db.get_properties_by_name([ query.userFirstStart + '%' ])
                .then( property => res.status(200).send(property) )
                .catch( () => res.status(500).send() );
        }
    },

    ///     FUTURE IMPLEMENTATION    ///
    
    // getPropertiesByUnits: ( req, res, next ) => {
    //     const db = req.app.get('db');
    
    //     db.get_properties_by_units()
    //       .then( properties => res.status(200).send( properties ) )
    //       .catch( () => res.status(500).send() );
    // },
}