// Fonction appelée lors du clic sur le bouton "Calculer" de la page outil_simulation.html
function calcul()
{
	// Récupération des informations du formulaire suite au clic bouton
	binaire_1=document.getElementById("binaire_1");
	binaire_2=document.getElementById("binaire_2");
	porte=document.getElementById("porte");
	
	// Appel de fonction selon la porte logique sélectionnée
	if(porte.value=='and')
	{calculAND();}

	if(porte.value=='or')
	{calculOR();}

	if(porte.value=='xor')
	{calculXOR();}

	if(porte.value=='nand')
	{calculNAND();}

	if(porte.value=='nor')
	{calculNOR();}

	if(porte.value=='xnor')
	{calculXNOR();}
}

// Fonction appelée lors du clic sur le bouton "Réinitialiser" de la page outil_simulation.html
function init()
{
	document.getElementById("bin1").innerHTML="";
	document.getElementById("bin2").innerHTML="";
	document.getElementById("resultat").innerHTML=""
	document.getElementById("photo_porte").src = "./img/vide.jpg"
}

// Fonction appelée lors du choix de la porte logique AND
function calculAND()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_AND.png"
	
}

// Fonction appelée lors du choix de la porte logique OR
function calculOR()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_OR.gif"
}

// Fonction appelée lors du choix de la porte logique XOR
function calculXOR()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_XOR.gif"
	
}

// Fonction appelée lors du choix de la porte logique NAND
function calculNAND()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_NAND.png"
}

// Fonction appelée lors du choix de la porte logique NOR
function calculNOR()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_NOR.gif"
}

// Fonction appelée lors du choix de la porte logique XNOR
function calculXNOR()
{
	if(binaire_1.value==0)
	{if(binaire_2.value==0)
		{resultat=1}
	}
	
	if(binaire_1.value==0)
	{if(binaire_2.value==1)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==0)
		{resultat=0}
	}
	
	if(binaire_1.value==1)
	{if(binaire_2.value==1)
		{resultat=1}
	}
	// informations retournées vers la page html en vue de leur affichage
	document.getElementById("resultat").innerHTML=resultat;
	document.getElementById("bin1").innerHTML=binaire_1.value;
	document.getElementById("bin2").innerHTML=binaire_2.value;
	document.getElementById("photo_porte").src = "./img/porte_XNOR.gif"
}


