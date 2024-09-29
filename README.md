# P14 OC : HRnet

## Objectifs

- Convertir l'ensemble du projet HRNet en React.
- Convertir l'un des quatre plugins jQuery actuels en React.
- Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux importer depuis des libraires existantes si tu manques de temps.
- Utiliser le stockage local pour la persistance des données.
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

## Description

HRnet est une application interne permettant de consulter et gérer une base de données d'employés.

## Technologies

Framework :

- React

Langages :

- HTML
- CSS

Librairies :

- React Redux
- React Router
- SASS
- Formik
- Yup
- dayjs
- material UI (@mui and @emotion)
- @manoaras/p14-modal-wh

## Projet d'origine

Le projet d'origine en JQuery est fourni par Openclassrooms : [ici](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)

## Création d'un package npm

Le package npm créé se nomme @manoaras/p14-modal-wh et concerne le composant Modal qui permet d'afficher une simple modal de validation de création d'employé. (Voir src/components/CreateEmployeeForm.jsx)</br>
Lien Github du package : [ici](https://github.com/manoaras/p14-modal-wh)

## Rapport de comparaison Lighthouse

## Règles de convention de nommage pour ce projet

### SCSS

Pour les noms de variables et de classes : `kebab--case ou kebab__case`
```
  ex:
  .header {
    &--logo{
      display: flex;
      align-items: center;
    }
  }

  .form {
    &--btn {
      &__text {
        font-size: $mdf;
        font-weight: 700;
      }
    }
  }
```

### JS

Pour les noms de variables et de fonctions : `camelCase`
```
  ex:
    const employees = useSelector((state) => state.employee.employees)
    const handleSearch = (event) => setSearchInput(event.target.value)
```
