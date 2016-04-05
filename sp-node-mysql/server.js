
//------------------------------------------------------------
// Database connection
//------------------------------------------------------------
//function connection(){
	console.log('Initializing database');
	var mysql = require('mysql');


	var pool = mysql.createPool({
				connectionLimit: 3,
  				host: "us-cdbr-azure-central-a.cloudapp.net",
  				user: "b0212399fa1965",
  				password: "4c90e9db",
  				database: "pinballgr8db"
				});

//	connection.connect(function(err) {
//		if (err) throw err
//		console.log('Database connection successful');
//	});

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
//}




///////// bouton Profils de joueurs est cliqué/////////////
app.get('/liste', function (req, res) {

	console.log('PROFILS DE JOUEURS -> on les affiche tous');
	var dataName = [];
	var names = "";
	
	pool.getConnection(function(err, connection1) {
		//requête pour afficher tous les joueurs
		connection1.query(qstr1, function(err, rows, fields) {
			if (err) throw err;
			for (var i = 0; i < rows.length; i++) {
				if(rows[i].permission == 1)
					dataName.push(rows[i].username);
    		}
    		res.send(dataName);
    		
    		connection1.release();
		});
	});
});
///////////// LOUPE -> on affiche le profils trouvé////////////////
app.get('/recherche', function (req, res) {

	console.log('LOUPE -> on affiche le profils trouvé');

	//nom du joueur voulu
	var nomChercher = req.query.user;
	var data = 0;
	var listeSucces = '';
	
	pool.getConnection(function(err, connection2) {
		//requête pour chercher les succes du joueur voulu
		connection2.query(qstr2 + "'" + nomChercher + "'", function(err, rowsSucces, fields) {
			if (err) throw err;
			var dataSucces = 0;
		
			if(rowsSucces[0] === undefined){
        		console.log('user does not exist in database');
			}
			else {
				if(String(rowsSucces[0].username) == ''){
        		console.log('user = (Juste un space)');
  	    	 	 }
   	    		else {
    				dataSucces =[rowsSucces[0].username , rowsSucces[0].firstSkin, rowsSucces[0].loveIsInTheAir, rowsSucces[0].eyeOnTheTarget, rowsSucces[0].goldDigger,
					rowsSucces[0].gottaCatchEmAll, rowsSucces[0].point1, rowsSucces[0].point2, rowsSucces[0].point3, rowsSucces[0].point4, rowsSucces[0].point5,
					rowsSucces[0].argent1, rowsSucces[0].argent2, rowsSucces[0].argent3, rowsSucces[0].argent4, rowsSucces[0].argent5, rowsSucces[0].wins1, rowsSucces[0].wins2,
					rowsSucces[0].wins3, rowsSucces[0].wins4, rowsSucces[0].wins5, rowsSucces[0].games1, rowsSucces[0].games2, rowsSucces[0].games3, rowsSucces[0].games4, rowsSucces[0].games5];

		 			var fieldsSucces = ['username' , 'First skin', 'Love is in the air', 'Eye on the target', 'gold digger',
					"Gotta catch 'em all", 'Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5',
					'Argent 1', 'Argent 2', 'Argent 3', 'Argent 4', 'Argent 5', 'Wins 1', 'Wins 2',
					'Wins 3', 'Wins 4', 'Wins 5', 'Games 1', 'Games 2', 'Games 3', 'Games 4', 'Games 5'];
			
					var firstAchievement = true;
					
					for(var i = 1; i < dataSucces.length; i++){
						if(dataSucces[i] == 1 && firstAchievement){
							listeSucces = listeSucces +fieldsSucces[i];
							firstAchievement = false;
						}
						if(dataSucces[i] == 1){
							listeSucces = listeSucces + ', ' + fieldsSucces[i];
						}
					}
				}
			}
			pool.getConnection(function(err, connection3) {
				//requête pour chercher le joueur voulu
				connection3.query(qstr3 + "'" + nomChercher + "'", function(err, rows, fields) {
					if (err) throw err;
			
					if(rows[0] === undefined){
        			console.log('user does not exist in database');
					}
					else {
						if(String(rows[0].username) == '')
        					console.log('user = (Juste un space)');
        				else {
        					console.log(rows[0].permission);
        					if(rows[0].permission == 1){
								data = ['rows[0].avatar', rows[0].username, rows[0].nbJouer, rows[0].nbGagner, rows[0].ratioVictoire, rows[0].nbBallePerdue, rows[0].nbPoints, listeSucces, rows[0].permission];				
								res.send(data);
							}
						}
					}
					connection3.release();
				});
			});
			connection2.release();
		});
	});
});


///////////// >> , cliqué à partir de la liste ////////////////
app.get('/fonctionSearch', function (req, res) {

	console.log('>> , cliqué à partir de la liste');

	//nom du joueur voulu
	var nomChercher = req.query.user;
	var data = 0;
	var listeSucces = '';
	
	pool.getConnection(function(err, connection4) {
		//requête pour chercher les succes du joueur voulu
		connection4.query(qstr2 + "'" + nomChercher + "'", function(err, rowsSucces, fields) {
			if (err) throw err;
		
			var dataSucces = 0;
		
			if(rowsSucces[0] === undefined){
        		console.log('user does not exist in database');
			}
			else {
				if(String(rowsSucces[0].username) == ''){
   		    	 	console.log('user does not exist in database');
       	 		}
        		else {
    				dataSucces =[rowsSucces[0].username , rowsSucces[0].firstSkin, rowsSucces[0].loveIsInTheAir, rowsSucces[0].eyeOnTheTarget, rowsSucces[0].goldDigger,
					rowsSucces[0].gottaCatchThemAll, rowsSucces[0].point1, rowsSucces[0].point2, rowsSucces[0].point3, rowsSucces[0].point4, rowsSucces[0].point5,
					rowsSucces[0].argent1, rowsSucces[0].argent2, rowsSucces[0].argent3, rowsSucces[0].argent4, rowsSucces[0].argent5, rowsSucces[0].wins1, rowsSucces[0].wins2,
					rowsSucces[0].wins3, rowsSucces[0].wins4, rowsSucces[0].wins5, rowsSucces[0].games1, rowsSucces[0].games2, rowsSucces[0].games3, rowsSucces[0].games4, rowsSucces[0].games5];

					var fieldsSucces = ['username' , 'First skin', 'Love is in the air', 'Eye on the target', 'gold digger',
					'Gotta catch them all', 'Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5',
					'Argent 1', 'Argent 2', 'Argent 3', 'Argent 4', 'Argent 5', 'Wins 1', 'Wins 2',
					'Wins 3', 'Wins 4', 'Wins 5', 'Games 1', 'Games 2', 'Games 3', 'Games 4', 'Games 5'];
					
					var firstAchievement = true;
					
					for(var i = 1; i < dataSucces.length; i++){
					
						if(dataSucces[i] == 1 && firstAchievement){
							listeSucces = listeSucces + fieldsSucces[i];
							firstAchievement = false;
						}
						if(dataSucces[i] == 1){
							listeSucces = listeSucces + ', ' + fieldsSucces[i];
						}
					}
				}
			}
			pool.getConnection(function(err, connection5) {
				//requête pour chercher le joueur voulu
				connection5.query(qstr3 + "'" + nomChercher + "'", function(err, rows, fields) {
					if (err) throw err;
			
					if(rows[0] === undefined){
        				console.log('user does not exist in database');
					}
					else{
						if(String(rows[0].username) != ''){
							data = ['rows[0].avatar', rows[0].username, rows[0].nbJouer, rows[0].nbGagner, rows[0].ratioVictoire, rows[0].nbBallePerdue, rows[0].nbPoints, listeSucces];
							console.log(listeSucces);				
							res.send(data);
						}
					}
					connection5.release();
				});
			});	
			connection4.release();
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
var qstr1 = 'SELECT * FROM users';

var qstr2 = "SELECT * FROM SUCCES WHERE username = ";

var qstr3 = "SELECT * FROM USERS WHERE username = ";


