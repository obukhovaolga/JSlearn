<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Выделите ячейки по диагонали</title>
</head>
<body>
  <style>
    table {
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
      padding: 3px 5px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td>
      <td>2:1</td>
      <td>3:1</td>
      <td>4:1</td>
      <td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td>
      <td>2:2</td>
      <td>3:2</td>
      <td>4:2</td>
      <td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td>
      <td>2:3</td>
      <td>3:3</td>
      <td>4:3</td>
      <td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td>
      <td>2:4</td>
      <td>3:4</td>
      <td>4:4</td>
      <td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td>
      <td>2:5</td>
      <td>3:5</td>
      <td>4:5</td>
      <td>5:5</td>
    </tr>
  </table>
  <script>
    let tr = document.querySelectorAll('tr');
      console.log(tr);
    let td = document.querySelectorAll('td');
      console.log(td);

    function changeColor(){
      for (let i = 0; i < td.length; i+=6){
       td[i].style.backgroundColor = 'red';
      }
    }
ChangeColor();
  </script>
</body>
</html>