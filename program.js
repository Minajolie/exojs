// Écrire un programme qui demande à l'utilisateur de saisir deux nombres et les stocke dans deux variables, puis affiche leur somme.
let n1 = parseFloat(prompt("ecris un nombre"));
let n2 = parseFloat(prompt("ecris un nombre"));
let n = n1+=n2;
document.write("1- la somme des deux nombres est de "+ n);
// Écrire un programme qui demande à l'utilisateur de saisir son âge et affiche un message différent selon que l'utilisateur est mineur, majeur ou senior.
let age = parseInt(prompt("quel est ton age"));
if (age <="14")
    {
        document.write("   ;2- tu est mineur "); 
    }
else if (age <="50")
{
    document.write("   ;2- tu est majeur "); 
}
else (age >"51")
    {
        document.write("   ;2- tu est senior "); 
    }

// Écrire un programme qui demande à l'utilisateur de saisir un nombre et affiche si ce nombre est pair ou impair.
let nombre = parseInt(prompt("saisie un nombre"))
if (nombre%2===0)
    {
        document.write("  3-le nombre est pair")
    }
    else
    {
        document.write(" 3-le nombre est impair")
    }
    // Écrire un programme qui demande à l'utilisateur de saisir un nombre et vérifie s'il est divisible par 3 ou non.
    let number = parseInt(prompt("ecris un nombre"));
    if (number%3===0)
        {
            document.write("  4-le nombre est divisible par 3")
        }
    else
    {
        document.write(" 4-le nombre n'est pas divisible par 3")
    }
    // Écrire un programme qui demande à l'utilisateur de saisir une lettre et affiche si cette lettre est une voyelle ou une consonne.
    var lettre = (prompt("ecris une lettre"));
    if (lettre === 'a' || lettre === 'e' || lettre === 'i' || lettre === 'o' || lettre === 'u')
    {
        document.write(" 5-la lettre est une voyelle")
    }
    else
    {
        document.write(" 5-la lettre est une consonne")
    }
    // Écrire un programme qui demande à l'utilisateur de saisir un nombre et vérifie s'il est positif, négatif ou nul.
    let verif = parseFloat(prompt("saisie un nombre"));
    if (verif > 0)

        {
            document.write(" 6-le nombre est positif");
        }
        else if (verif < 0)
            {
                document.write(" 6-le nombre est negatif");
            }
            else
            {
                document.write(" 6-le nombre est nul");
            }
            // Écrire un programme qui demande à l'utilisateur de saisir son prénom et affiche un message de bienvenue personnalisé.
            prompt("quel est ton prenom?");
            alert("Bonjour");
            // Écrire un programme qui demande à l'utilisateur de saisir son âge et le nombre de jours qu'il souhaite vivre, puis affiche l'année où il aura atteint cet âge.
            let agee = parseInt(prompt("quel est ton age ?"));
            let jours = parseInt(prompt("combien de jours veux-tu vivre ?"));
            // Écrire un programme qui demande à l'utilisateur de saisir un nombre et calcule sa factorielle.
            let entier = parseInt(prompt("ecris un nombre"));
            let result = factorial(entier);
            document.write(result)
