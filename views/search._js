<html>
<head>
  <title></title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <style>
        th{
            text-align: right;
        }
    </style>
</head>
<body>
  <div style="margin:100px;">
    <nav class="navbar navbar-inverse navbar-static-top">
  <div class="container">
    <ul class="nav navbar-nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </div>
</nav>
    <div class="jumbotron"  style="padding:40px;">
       <form id="form" method="post" action="/search" enctype="multipart/form-data"> <h1>Search - <input type="text" name="search"/></h1><input  class="btn btn-primary btn-lg" type="submit" value="Submit"></form>
  <table class="table">
    <tr><th>Content :</th>
        <td><%= value %></td>
    </tr>
  </table>
</div>
</body>
</html>