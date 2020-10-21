<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentación</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand text-white">IW Fashion API</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <!--<li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Marcas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Diseños Personalizados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tokens</a>
        </li>-->
      </ul>
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </nav>

  <div class="container">

    <div class="row" style="margin-top:80px;">
      <div class="col-12">
        <h2 class="title"><b>Introducción</b></h2>
        <p>Esta documentación les ayudará a familiarizarse con los recursos de la API de IW Fashion 
          y les mostrará cómo realizar diferentes consultas, para que pueda sacarle el máximo partido.</p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-12">
        <h2 class="title"><b>REST</b></h2>
      </div>
      <div class="col-12">
        <p> <b>URL base:</b> http://veterinarialissette-vc170991-aa170621.000webhostapp.com/api</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p>La URL base contiene información sobre todos los recursos de API disponibles. 
          Todas las solicitudes son solicitudes <b>GET</b> y <b>POST</b>, los cuales pasan por https. 
          Todas las respuestas devolverán datos en formato <b>JSON</b>.
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h4>Recursos disponibles:</p></h4>
      </div>
      <div class="col-12">
        <ul>
          <li>Login</li>
          <li>Productos</li>
          <li>Marcas</li>
          <li>Diseños Personalizados</li>
        </ul>
      </div>
      <div class="col-12 mt-2">
        <h4>Todos los Recursos:</p></h4>
      </div>
    </div>

    <!--Inicio Tabla-->
  <div id="tablaBolsa" class="table-responsive-sm mt-2">
    <table class="table table-striped table-hover text-center">
      <thead class="thead-dark">
        <tr>
          <th>Recurso</th>
          <th>Descripción</th>
          <th>Método HTTP</th>
          <th>URI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td colspan="4"><b>SESIONES Y CUENTAS DE USUARIO</b></td>
        </tr>
        <tr>
          <td>Registrarse</td>
          <td>Crea cuenta de usuario y devuelve token de sesión</td>
          <td>POST</td>
          <td>URL_base<b>/register</b></td>
        </tr>
        <tr>
          <td>Login</td>
          <td>Valida cuenta de usuario y devuelve token de sesión</td>
          <td>POST</td>
          <td>URL_base<b>/login</b></td>
        </tr>
        <tr>
          <td>Login con Google</td>
          <td>Valida cuenta de google y devuelve token de sesión</td>
          <td>POST</td>
          <td>URL_base<b>/login/google</b></td>
        </tr>
        <tr>
          <td>Logout</td>
          <td>Cierra sesión y elimina token</td>
          <td>GET</td>
          <td>URL_base<b>/logout</b></td>
        </tr>

        <tr>
          <td colspan="4"><b>PRODUCTOS</b></td>
        </tr>

        <tr>
          <td>Productos</td>
          <td>Obtiene todos los productos de todas las categorías</td>
          <td>GET</td>
          <td>URL_base<b>/products</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene un producto por el ID</td>
          <td>GET</td>
          <td>URL_base<b>/products/id</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los productos para hombre</td>
          <td>GET</td>
          <td>URL_base<b>/products-men</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los productos para mujer</td>
          <td>GET</td>
          <td>URL_base<b>/products-women</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los productos para niños</td>
          <td>GET</td>
          <td>URL_base<b>/products-kids</b></td>
        </tr>

        <tr>
          <td>Productos</td>
          <td>Obtiene toda la ropa para hombre</td>
          <td>GET</td>
          <td>URL_base<b>/clothes/men</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene toda la ropa para mujer</td>
          <td>GET</td>
          <td>URL_base<b>/clothes/women</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene toda la ropa para niños</td>
          <td>GET</td>
          <td>URL_base<b>/clothes/kids</b></td>
        </tr>

        <tr>
          <td>Productos</td>
          <td>Obtiene todos los zapatos para hombre</td>
          <td>GET</td>
          <td>URL_base<b>/shoes/men</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los zapatos para mujer</td>
          <td>GET</td>
          <td>URL_base<b>/shoes/women</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los zapatos para niños</td>
          <td>GET</td>
          <td>URL_base<b>/shoes/kids</b></td>
        </tr>

        <tr>
          <td>Productos</td>
          <td>Obtiene todos los accesorios para hombre</td>
          <td>GET</td>
          <td>URL_base<b>/accesories/men</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los accesorios para mujer</td>
          <td>GET</td>
          <td>URL_base<b>/accesories/women</b></td>
        </tr>
        <tr>
          <td>Productos</td>
          <td>Obtiene todos los accesorios para niños</td>
          <td>GET</td>
          <td>URL_base<b>/accesories/kids</b></td>
        </tr>

        <tr>
          <td colspan="4"><b>MARCAS</b></td>
        </tr>


        <tr>
          <td>Marcas</td>
          <td>Obtiene todos las Marcas registradas</td>
          <td>GET</td>
          <td>URL_base<b>/brands</b></td>
        </tr>
        <tr>
          <td>Marcas</td>
          <td>Crea una nueva marca</td>
          <td>POST</td>
          <td>URL_base<b>/crud/newBrand.php</b></td>
        </tr>
        <tr>
          <td>Marcas</td>
          <td>Edita una marca mediante ID</td>
          <td>POST</td>
          <td>URL_base<b>/crud/editBrand.php</b></td>
        </tr>

        <tr>
          <td colspan="4"><b>DISEÑOS PERSONALIZADOS</b></td>
        </tr>

        <tr>
          <td>Diseños Personalizados</td>
          <td>Obtiene todos los diseños personalizados registrados</td>
          <td>GET</td>
          <td>URL_base<b>/customDesigns</b></td>
        </tr>
        <tr>
          <td>Diseños Personalizados</td>
          <td>Inserta un nuevo diseño personalizado</td>
          <td>POST</td>
          <td>URL_base<b>/CustomDesigns/newCD.php</b></td>
        </tr>
        <tr>
          <td>Diseños Personalizados</td>
          <td>Edita un diseño personalizado mediante ID</td>
          <td>POST</td>
          <td>URL_base<b>/CustomDesigns/edit.php</b></td>
        </tr>
        <tr>
          <td>Diseños Personalizados</td>
          <td>Borra un diseño personalizado mediante ID</td>
          <td>POST</td>
          <td>URL_base<b>/CustomDesigns/deleteCD.php</b></td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--Fin Tabla-->

  <div class="row mt-5">
    <div class="col">
      <h2 class="title"><b>Token</b></h2> <br>
      <p> <b>Tipo:</b> Bearer Token</p>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <img src="https://veterinarialissette-vc170991-aa170621.000webhostapp.com/token.PNG" alt="Token" class="img-fluid rounded">
    </div>
  </div>

  <div class="row">
    <div class="col-12 mt-5">
      <h2 class="title"><b>Ejemplo</b></h2>
      <p> Obtener todos los productos registrados </p>
      <p>
        <b>URL: </b> http://veterinarialissette-vc170991-aa170621.000webhostapp.com/api/products   <br>
        <b>Método HTTP: </b>GET, <b>  Respuesta: </b>JSON
      </p>
    </div>
    <div class="col-12">
      <img src="https://veterinarialissette-vc170991-aa170621.000webhostapp.com/ejemploAPI.PNG" alt="Ejemplo GET" class="img-fluid rounded">
    </div>
  </div>

  </div>

  <footer class="footer bg-dark mt-3 py-3 text-white">
    <div class="row">
      <div class="col">
        <h6 class="text-center">IW Fashion <br> &copy; 2020 </h6>
      </div>
    </div>
  </footer>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

</html>