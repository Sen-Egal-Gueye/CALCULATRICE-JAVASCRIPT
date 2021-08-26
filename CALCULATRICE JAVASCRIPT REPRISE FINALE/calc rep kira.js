
function ajouterChiffre(val)
{
    var nombre = val;
    document.form.nameEcran.value += nombre;
}

function reset() 
{
    document.getElementById('ecran').value = '';
}

function effacerChiffre() 
{
    var effaceUnChiffre = document.getElementById('ecran').value;
    document.getElementById('ecran').value = effaceUnChiffre.substring(0, effaceUnChiffre.length-1);
}

function calculer() 
{
    var resultat = document.getElementById('ecran').value;

    if (resultat) 
    {
        document.getElementById('ecran').value = eval(resultat);
        document.getElementById('ecran').style = 'text-align: right ; font-size: 30px';

    }

}