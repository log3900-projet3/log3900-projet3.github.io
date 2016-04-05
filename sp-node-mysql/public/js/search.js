$(document).ready(function(){

	//elements du button recherche
	$("#rechercheJoueur").hide();
	$("#profilsJoueur").hide();
	$("#profilsPrive").hide();
	
	//elements du button profils de joueurs
	$("#txtListe").hide();
	$("#listeUsername").hide();
	document.getElementById("listeUsername").innerHTML = "";
	
	//elements du button credits
	$("#pageCredits").hide();		
	
	
	//Premier bouton Recherche
	$("#buttonRecherche").click(function(){
	
		//elements du button recherche
		$("#rechercheJoueur").show();
		$("#profilsJoueur").hide();
		$("#profilsPrive").hide();
		
		//elements du button profils de joueurs
		$("#txtListe").hide();
		$("#listeUsername").hide();
		document.getElementById("listeUsername").innerHTML = "";

		//elements du button credits
		$("#pageCredits").hide();		
		
	});
	
	//Deuxième bouton Profils de joueur
	$("#buttonListe").click(function(){
	
		//elements du button profils de joueurs
		//A VOIR
		document.getElementById("listeUsername").innerHTML = "";
		
		var buttonArray = [];
		$.get('http://localhost:5050/liste').done(function(dataName){
			
			//afficher tous les noms reçus (clickable)
			for(var i = 0; i < dataName.length; i++){
				
				var para = document.createElement("P");        				// Create a <p> element
				var t = document.createTextNode(dataName[i]);				// Create a text node for p
				var viewNext = document.createElement("BUTTON");       		// Create a <button> element
				var id = dataName[i];
				viewNext.setAttribute("id", id);
				var next = document.createTextNode("	>>");				// Create a text node for button
				viewNext.appendChild(next);                                	// Append the text to <button>
				
				viewNext.addEventListener("click", function(e){
				console.log(e.target.id + " est clické");
				search(e.target.id);
				});
				
				console.log(viewNext);
				
				var style = document.createElement("STYLE");
    			var styleTXT = document.createTextNode("body {align: center; font: 16px times; line-height: 14.0px; color: #E77471;}");
    			style.appendChild(styleTXT);
				
				para.appendChild(t);                                	// Append the text to <p>
				para.appendChild(viewNext);                                	// Append the button to <p>
				para.appendChild(style); 
    			document.getElementById("listeUsername").appendChild(para);
			}
		});
		
		$("#txtListe").show();
		$("#listeUsername").show();
		
		//elements du button recherche
		$("#rechercheJoueur").hide();
		$("#profilsJoueur").hide();
		$("#profilsPrive").hide();
		
		//elements du button credits
		$("#pageCredits").hide();		
		
	});

	$("#buttonCredits").click(function(){
		
		//elements du button credits
		$("#pageCredits").show();		
			
		//elements du button recherche
		$("#rechercheJoueur").hide();
		$("#profilsJoueur").hide();
		$("#profilsPrive").hide();
		
		//elements du button profils de joueurs
		$("#txtListe").hide();
		$("#listeUsername").hide();
		document.getElementById("listeUsername").innerHTML = "";

	});

	$('#searchJoueur').click(function(){
		
		var nomChercher = document.getElementById("input").value ;
		if (nomChercher != ' '){
			$.get('http://localhost:5050/recherche?user='+ nomChercher).done(function(data){
				if(data[8] == 1){
					document.getElementById("varNom").innerHTML = data[1] ;	
					document.getElementById("nbJouer").innerHTML = data[2] ;	
					document.getElementById("nbGagner").innerHTML = data[3] ;	
					document.getElementById("v-d").innerHTML = data[4] ;	
					document.getElementById("nbBalles").innerHTML = data[5] ;	
					document.getElementById("nbPoints").innerHTML = data[6] ;	
					document.getElementById("succes").innerHTML = data[7] ;
						
					$("#profilsJoueur").show();
					$("#profilsPrive").hide();
				}
				else if(data[8] == 0){
					$("#profilsJoueur").hide();
					$("#profilsPrive").show();
				}
			});
		}
	});
	
	function search(nomChercher){
	
		$.get('http://localhost:5050/fonctionSearch?user='+ nomChercher).done(function(data){
				
		document.getElementById("varNom").innerHTML = data[1] ;	
		document.getElementById("nbJouer").innerHTML = data[2] ;	
		document.getElementById("nbGagner").innerHTML = data[3] ;	
		document.getElementById("v-d").innerHTML = data[4] ;	
		document.getElementById("nbBalles").innerHTML = data[5] ;	
		document.getElementById("nbPoints").innerHTML = data[6] ;	
		document.getElementById("succes").innerHTML = data[7] ;
			
		});
		
		//elements du button recherche
		$("#rechercheJoueur").hide();
		$("#profilsPrive").hide();
		$("#profilsJoueur").show();
		
		//elements du button de profils de joueurs
		$("#txtListe").hide();
		$("#listeUsername").show();
		document.getElementById("listeUsername").innerHTML = "";

		//elements du button credits
		$("#pageCredits").hide();
	}
});
	
