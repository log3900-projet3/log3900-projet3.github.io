
//------------------------------------------------------------
// Database connection
//------------------------------------------------------------
console.log('Initializing database');
var mysql = require('mysql');


var connection = mysql.createConnection({
  			host: "us-cdbr-azure-central-a.cloudapp.net",
  			user: "b0212399fa1965",
  			password: "4c90e9db",
  			database: "pinballgr8db"
			});

connection.connect(function(err) {
	if (err) throw err
	console.log('Database connection successful');
});



//------------------------------------------------------------
// Page loading
//------------------------------------------------------------
console.log('Initializing server');
var express = require('express');
var path = require('path');


var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
	
	res.sendFile(path.join(__dirname + '/index.html'));

});

// bouton Profils de joueurs est cliqué
app.get('/liste', function (req, res) {
	console.log('bouton profils est cliqué, on affiche les noms');
	var dataName = [];
	var names = "";
	//requête pour afficher tous les joueurs
	connection.query(qstr1, function(err, rows, fields) {
		if (err) throw err;
		
		for (var i = 0; i < rows.length; i++) {
			//console.log('Row #', i, 'was returned with', rows[i].username);
			
			dataName.push(rows[i].username);
    	}
    	res.send(dataName);
	});
});

// bouton chercher est cliqué
app.get('/recherche', function (req, res) {
	console.log('bouton recherche est cliqué, on affiche le profils trouvé');

	//nom du joueur voulu
	var nomChercher = req.query.user;
	var data = 0;
	var listeSucces = '';
	
	//requête pour chercher les succes du joueur voulu
	connection.query(qstr2 + "'" + nomChercher + "'", function(err, rowsSucces, fields) {
		if (err) throw err;
		
		var dataSucces = 0;
		
		if(rowsSucces[0] === undefined){
        	console.log('user does not exist in database');
        	//alert here TODO
        }
        else{
    		dataSucces =[rowsSucces[0].username , rowsSucces[0].firstSkin, rowsSucces[0].loveIsInTheAir, rowsSucces[0].eyeOnTheTarget, rowsSucces[0].goldDigger,
			rowsSucces[0].gottaCatchThemAll, rowsSucces[0].point1, rowsSucces[0].point2, rowsSucces[0].point3, rowsSucces[0].point4, rowsSucces[0].point5,
			rowsSucces[0].argent1, rowsSucces[0].argent2, rowsSucces[0].argent3, rowsSucces[0].argent4, rowsSucces[0].argent5, rowsSucces[0].wins1, rowsSucces[0].wins2,
			rowsSucces[0].wins3, rowsSucces[0].wins4, rowsSucces[0].wins5, rowsSucces[0].games1, rowsSucces[0].games2, rowsSucces[0].games3, rowsSucces[0].games4, rowsSucces[0].games5];

			var fieldsSucces = ['username' , 'First skin', 'Love is in the air', 'Eye on the target', 'gold digger',
			'Gotta catch them all', 'Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5',
			'Argent 1', 'Argent 2', 'Argent 3', 'Argent 4', 'Argent 5', 'Wins 1', 'Wins 2',
			'Wins 3', 'Wins 4', 'Wins 5', 'Games 1', 'Games 2', 'Games 3', 'Games 4', 'Games 5'];
			
			for(var i = 1; i < dataSucces.length; i++){
				if(dataSucces[i] == 1 && i == 1){
					listeSucces = listeSucces +fieldsSucces[i];
				}
				if(dataSucces[i] == 1 && i != (1)){
					listeSucces = listeSucces + ', ' + fieldsSucces[i];
				}
			}
		}
		//requête pour chercher le joueur voulu
		connection.query(qstr3 + "'" + nomChercher + "'", function(err, rows, fields) {
			if (err) throw err;
			if(rowsSucces[0] === undefined)
        		console.log('user does not exist in database: ');
        	else{
				data = ['rows[0].avatar', rows[0].username, rows[0].nbJouer, rows[0].nbGagner, rows[0].ratioVictoire, rows[0].nbBallePerdue, rows[0].nbPoints, listeSucces];				
				res.send(data);
				}
		});
	});
});

app.get('/fonctionSearch', function (req, res) {
	console.log('bouton recherche est cliqué, on affiche le profils trouvé');

	//nom du joueur voulu
	var nomChercher = req.query.user;
	var data = 0;
	var listeSucces = '';
	
	//requête pour chercher les succes du joueur voulu
	connection.query(qstr2 + "'" + nomChercher + "'", function(err, rowsSucces, fields) {
		if (err) throw err;
		
		var dataSucces = 0;
		
		if(rowsSucces[0] === undefined){
        	console.log('user does not exist in database');
        	//alert here TODO
        }
        else{
    		dataSucces =[rowsSucces[0].username , rowsSucces[0].firstSkin, rowsSucces[0].loveIsInTheAir, rowsSucces[0].eyeOnTheTarget, rowsSucces[0].goldDigger,
			rowsSucces[0].gottaCatchThemAll, rowsSucces[0].point1, rowsSucces[0].point2, rowsSucces[0].point3, rowsSucces[0].point4, rowsSucces[0].point5,
			rowsSucces[0].argent1, rowsSucces[0].argent2, rowsSucces[0].argent3, rowsSucces[0].argent4, rowsSucces[0].argent5, rowsSucces[0].wins1, rowsSucces[0].wins2,
			rowsSucces[0].wins3, rowsSucces[0].wins4, rowsSucces[0].wins5, rowsSucces[0].games1, rowsSucces[0].games2, rowsSucces[0].games3, rowsSucces[0].games4, rowsSucces[0].games5];

			var fieldsSucces = ['username' , 'First skin', 'Love is in the air', 'Eye on the target', 'gold digger',
			'Gotta catch them all', 'Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5',
			'Argent 1', 'Argent 2', 'Argent 3', 'Argent 4', 'Argent 5', 'Wins 1', 'Wins 2',
			'Wins 3', 'Wins 4', 'Wins 5', 'Games 1', 'Games 2', 'Games 3', 'Games 4', 'Games 5'];
			
			for(var i = 1; i < dataSucces.length; i++){
				if(dataSucces[i] == 1 && i == 1){
					listeSucces = listeSucces +fieldsSucces[i];
				}
				if(dataSucces[i] == 1 && i != (1)){
					listeSucces = listeSucces + ', ' + fieldsSucces[i];
				}
			}
		}
		//requête pour chercher le joueur voulu
		connection.query(qstr3 + "'" + nomChercher + "'", function(err, rows, fields) {
			if (err) throw err;
			if(rowsSucces[0] === undefined)
        		console.log('user does not exist in database: ');
        	else{
				data = ['rows[0].avatar', rows[0].username, rows[0].nbJouer, rows[0].nbGagner, rows[0].ratioVictoire, rows[0].nbBallePerdue, rows[0].nbPoints, listeSucces];				
				res.send(data);
				}
		});
	});
});

app.listen(5050, function() {
	console.log('Listening on port 5050...');
});



//------------------------------------------------------------
// Execution
//------------------------------------------------------------
console.log('Executing query:');
var qstr1 = 'SELECT username FROM users';

var qstr2 = "SELECT * FROM SUCCES WHERE username = ";

var qstr3 = "SELECT * FROM USERS WHERE username = ";


