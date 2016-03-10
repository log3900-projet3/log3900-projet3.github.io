$(document).ready(function(){

	//elements du button profils joueurs
	$("#rechercheJoueur").hide();
	$("#profilsJoueurInit").hide();
	
	//elements du button de reglements
	$("#txtLourd").hide();
	$("#buttonPlus1").hide();
	$("#txtLeger").hide();
	$("#buttonPlus2").hide();
	$("#txtChat").hide();
	$("#buttonPlus3").hide();
	$("#regleClientLourd").hide();
	$("#regleClientLeger").hide();
	$("#regleChat").hide();
	
	//elements du button credits
	$("#pageCredits").hide();		
	
	
	$("#buttonJoueur").click(function(){
	
		//elements du button profils joueurs
		$("#rechercheJoueur").show();
		$("#profilsJoueurInit").show();
		
		//elements du button de reglements
		$("#txtLourd").hide();
		$("#buttonPlus1").hide();
		$("#txtLeger").hide();
		$("#buttonPlus2").hide();
		$("#txtChat").hide();
		$("#buttonPlus3").hide();
		
		//elements du button credits
		$("#pageCredits").hide();		
		
	});
	
	$("#buttonReglement").click(function(){
	
		//elements du button de reglements
		$("#txtLourd").show();
		$("#buttonPlus1").show();
		$("#txtLeger").show();
		$("#buttonPlus2").show();
		$("#txtChat").show();
		$("#buttonPlus3").show();
		
		//elements du button profils joueurs
		$("#rechercheJoueur").hide();
		$("#profilsJoueurInit").hide();
		
		//elements du button credits
		$("#pageCredits").hide();		
		
	});
	
	$("#buttonPlus1").click(function(){
	
		//elements du button de reglements
		$("#regleClientLourd").toggle();
		
	});
	
	$("#buttonPlus2").click(function(){
	
		//elements du button de reglements
		$("#regleClientLeger").toggle();
		
	});
	
	$("#buttonPlus3").click(function(){
	
		//elements du button de reglements
		$("#regleChat").toggle();
		
	});

	$("#buttonCredits").click(function(){
		
		//elements du button credits
		$("#pageCredits").show();		
			
		//elements du button profils joueurs
		$("#rechercheJoueur").hide();
		$("#profilsJoueurInit").hide();
		
		//elements du button de reglements
		$("#txtLourd").hide();
		$("#buttonPlus1").hide();
		$("#txtLeger").hide();
		$("#buttonPlus2").hide();
		$("#txtChat").hide();
		$("#buttonPlus3").hide();
	});
	
});
	
