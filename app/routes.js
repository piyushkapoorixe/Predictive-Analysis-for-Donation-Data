var Subjects = require('./models/SubjectViews');

module.exports = function(app) {	
	// sample api route
    app.get('/api/data', function(req, res) {
    // use mongoose to get all nerds in the database
        Subjects.find(
            {}, 
            {'_id': 0, 'school_state': 1, 'resource_type': 1, 'poverty_level': 1, 'date_posted': 1, 'total_donations': 1, 'funding_status': 1, 'grade_level': 1}, 
            function(err, subjectDetails) {
                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err) 
                    res.send(err);
                res.json(subjectDetails); // return all nerds in JSON format
            }
        );
    });



    app.get('*', function(req, res) {
        res.sendFile('/Users/piyushkapoor/Desktop/Predictive Analysis_ADT/public/index.html'); // /Users/piyushkapoor/Desktop/Predictive Analysis_ADT/public/index.html // res.sendFile('./public/index.html')
    });//public/index.html
    

}
