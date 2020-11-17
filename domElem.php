<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Дочерние элементы в DOM</title>
</head>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
  <script>
    let div = document.body.firstElementChild
      console.log(div);
    let ul = div.nextElementSibling;
      console.log(ul);
    let il2 = ul.lastElementChild;
      console.log(il2);
  </script>
</body>
</html>