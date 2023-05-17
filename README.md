# apifivers
es un API REST hecha en node.js (v18) y MONGODB para demostración del pequeño proyecto "FiversYeih", un intento protocolario de red social 
<h1>API F I V E R Y E I H !</h1>
<table>
  <tr>
    <th>Metodo</th>
    <th>End Point</th>
    <th>Qué hace</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/login</td>
    <td>usando credenciales correctas devuelve un tokende acceso e informacion de indentificacion {nombre, _id, role, email}</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/auth/register</td>
    <td>permite registrar un usuario nuevo, bajo esta estructructura {email, pass, nombre, role}, devuelve un {code, nameusr, message}</td>
  </tr>
  
   <tr>
    <td>POST</td>
    <td>/roles</td>
    <td>necesita token valido  y un rol adminsitrador, para crear un rol nuevo recibe un {codigo, descripcion, permisos<string>[]}</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/roles</td>
    <td>necesita sesion activa, y un rol adminsitrador, trae todo los roles existentes,c</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/roles/:codigo</td>
    <td>necesita sesion activa, y un rol adminsitrador, trae el detalle del rol solicitado</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/roles/:id</td>
    <td>necesita sesion activa, y un rol adminsitrador permite modificar un roll dando el _id del rol {codigo, descripcion, permisos<string>[]}</td>   
  </tr>
   <tr>
     <td>DELETE</td>
    <td>/roles/:id</td>
    <td>necesita sesion activa, y un rol adminsitrador permite eliminar un roll dando el _id del rol</td>
  </tr>
  
  
  <tr>
    <td>GET</td>
    <td>/post</td>
    <td>trae la lista de todos los post</td>
  </tr>
   <tr>
     <td>GET</td>
    <td>/post/:id</td>
    <td>trae el detalle de un post especifico pasando el _id del post</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/post/new</td>
    <td>puede crear un nuevo post, no necesita tener un token valido; {id_author,title,description,image}</td>
  </tr>
  
  <tr>
    <td>PUT</td>
    <td>/post/update/:id</td>
    <td>necesita sesion activa y un rol conpermisos de actualizacion / modificacion ('USER', 'ADMIN'); {id: _id, body:{id_author,title,description,image}} </td>
  </tr>
  
  <tr>
    <td>DELETE</td>
    <td>/post/del/:id</td>
    <td>necesita sesion activa y un rol con permisos de eliminacion ('USER', 'ADMIN'), pasadno el _id del  post</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/comments/:id</td>
    <td>devuelve la laista de comentarios de determinado post, dado su _id </td>
  </tr>
  
  <tr>
    <td>POST</td>
    <td>/comments</td>
    <td>no es necesario tener token valido para realiazar un comentario en caso de tener un token valido se puede adjuntar su _id de usuario; {message, idfrom,id_author?}</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/comments/:id</td>
    <td>necesita sesion activa y un rol con permisos de eliminacion ('USER', 'ADMIN') y proveer el _iuud del comentario,</td>
  </tr>
</table>
