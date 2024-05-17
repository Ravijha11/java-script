<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div id="container">
  </div>
  <button onclick="getAnimals()">get animals</button>
  <script>
    function getAnimals() {
      fetch("https://fakerapi.it/api/v1/persons")
        .then(async function(response) {
          const jsonData = await response.json();
          document.getElementById("container").innerHTML = JSON.stringify(jsonData.data);
        })
    }
    
  </script>
</body>

</html>
