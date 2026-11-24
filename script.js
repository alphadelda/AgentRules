const boutonGenerer = document.querySelector("form button");

boutonGenerer.addEventListener("click", () => {
  const nomProjet = document.getElementById("nom-projet").value.trim();
  const stackSelect = document.getElementById("stack");
  const stackChoisie = stackSelect.options[stackSelect.selectedIndex].text;
  const reglesCochees = Array.from(
    document.querySelectorAll('input[name="regles"]:checked')
  ).map((caseCochee) => caseCochee.value);

  const listeRegles = reglesCochees.length
    ? reglesCochees.map((regle) => `- ${regle}`).join("\n")
    : "- Aucune règle sélectionnée";

  const markdown = `# Règles pour ${nomProjet || "[Nom du projet]"}

## Stack technique
- ${stackChoisie}

## Règles de collaboration
${listeRegles}`;

  document.getElementById("resultat").value = markdown;
});
