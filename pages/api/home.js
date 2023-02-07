import sql from 'mysql';

export default function (req, res) {
    const db = sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'project',
    });
    
    try {
        db.connect(function(err) {
            if (err) throw err;
            db.query('SELECT * FROM recipe, users WHERE users.author_id=recipe.author_id', (error, results) => {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.send(results);
                }
            });
        });
    } catch (error) {
        res.status(500).send(error);
    }
}