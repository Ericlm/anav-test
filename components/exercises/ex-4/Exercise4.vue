<template>
    <div class="exercise-4">
        <div class="inputs">
            <b-form-input placeholder="Pièces gagnées" v-model="coins" type="number" min="0" number></b-form-input>
            <b-form-input placeholder="Vies perdues" v-model="lives" type="number" min="0" max="10" number></b-form-input>
        </div>

        <div class="score-display">
            <div id="low-coins">Vous ferez mieux la prochaine fois 💪</div>
            <div id="medium-coins" >Pas mal, pas mal du tout ! 💰</div>
            <div id="high-coins">Excellent score, vous avez raflé la mise! 💎</div>

            <div id="low-lives">Vous n'avez pas perdu une seule vie, bravo ! 🥳</div>
            <div id="medium-lives">Vous avez perdu quelques vies, mais vous êtes sur la bonne voie 🤠</div>
            <div id="high-lives">Vous avez perdu toutes vos vies, game over 😵</div>
        </div>
    </div>
</template>

<script>
// Objectifs : 
// On veut afficher des infos différentes selon le nombre de pièces (coins) et le nombre de vies perdues (lives)
// Toutes les informations sont déjà présentes, il suffit de les afficher selon les conditions suivantes : 
// - pièces : 
//          - afficher "vous feriez mieux..." si le nb de pièces est inférieur ou égal à 5
//          - afficher "pas mal" si le nb de pièces est supérieur à 5 mais inéfieur à 20
//          - afficher "excellent..." si le nb de pièces est égal à 20
// - vies : 
//          - afficher "vous n'avez pas perdu..." si le nb de vies perdues est égal à 0
//          - afficher "vous avez perdu qq vies..." si le nb de vies perdues est inférieur à 10 mais supérieur à 0
//          - afficher "vous avez perdu toutes vos vies..." si le nb de vies perdues est égal à 10
// Note : on n'affiche rien tant qu'il n'y a rien dans les deux champs (si les deux champs sont à null)

export default {
    data() {
        return {
            coins: 0,
            lives: 0,
        }
    },
}
</script>