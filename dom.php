<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Dom</title>
</head>
<body>
<form name="search">
  <label>Search the site:
    <input type="text" name="search">
  </label>
  <input type="submit" value="Search!">
</form>

<hr>

<form name="search-person">
  Search the visitors:
  <table id="age-table">
    <tr>
      <td>Age:</td>
      <td id="age-list">
      <label>
        <input type="radio" name="age" value="young">less than 18</label>
      <label>
        <input type="radio" name="age" value="mature">18-50</label>
      <label>
        <input type="radio" name="age" value="senior">more than 50</label>
      </td>
    </tr>

    <tr>
      <td>Additionally:</td>
      <td>
        <input type="text" name="info[0]">
        <input type="text" name="info[1]">
        <input type="text" name="info[2]">
        </td>
    </tr>
  </table>

    <input type="submit" value="Search!">
  </form>

  <script>
  let ageTable = document.querySelector('#age-table');
    console.log(ageTable); //Таблицa с id="age-table".
  let labels = ageTable.querySelectorAll('label');
    console.log(labels); //Все элементы label внутри этой таблицы (их три)
  let firstTd = ageTable.querySelector('td');
    console.log(firstTd); //Первый td в этой таблице (со словом «Age»).
  let form = document.querySelector('form[name="search"]');
    console.log(form); //Форму form с именем name="search"
    console.log( form.querySelector('input') ); //Первый input в этой форме.
  let inputs = form.querySelectorAll("input[type='text']:last-child");
    console.log(inputs); //Последний input в этой форме
   </script>  
</body>
</html>
