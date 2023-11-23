

# **WHYNOT** | Prueba tecnica

## **📌 OBJETIVOS**

-  Construir una aplicacion utlizando **Next.js**.
-  Poner en práctica recursos básicos de estilos y diseño.
-  Completar la labor en el plazo acordado.
-  Aprender y practicar Next.js, Primsa ORM y deploy.

<br />

---

## **DURACIÓN**

El proyecto tuvo una duración de aproximandamente 5 días, como no sabia nada de Next.js o Prisma pase mas de la mitad del tiempo configurando y entendiendo su estructra.

<br />

---

## **PROPÓSITO DEL PROYECTO**

La idea de este proyecto fue construir una aplicación web que permitiera a los usuarios:
-  Suscribirse a torneos.
-  Visualizar una lista de torneos disponibles.

Y a los administradores:
-  Crear y manejar la info de los torneos ya existentes, ya sea actualizando su info o borrandolos permanentemente.
-  Gestionar a los usuarios.

<br />

---

## **📁 ESTRUCTURA**

<br />

### **🖱 FRONT-END**

La aplicación se desarrolló utilizando **Next.js** y cuenta con las siguientes rutas:

**HOME PAGE (/) |** página de inicio con:

-  Info del usuario.
-  lista de los torneos en los que esta registrado.

<br />

**📍 TORNEOS PAGE (/torneos)|**

-  Aqui se muestran todos los torneos existentes.
-  cada torneo que aparece es una iteracion de un componente llamado torneo.

<br />
**📍 TORNEOS |**: componente que renderizara la info del torneo pasado por props
Aparte de mostrar la info, permite al usuario suscribirse, cancelar suscripciones y ver el listado de otros participantes

##### FILTROS APLICADOS

![principal](capturas/Captura484.png)
<br />

**📍 FORM PAGE (/form/[id]) |**: en esta ruta se muestra un form para crear o actualizar un torneo, cuenta con los siguientes inputs:
Este formulario es **controlado completamente con JavaScritp**. Cuenta con los siguientes campos:

-  evento: string.
-  ubicacion: string.
-  fecha: date.
-  portada: string (esta es una url para mostrar en el componente torneo).
-  Paso a paso.
-  Imagen.
-  Tipos de dieta.

<br />

**ADMIN (/admin) |**: en esta vista se encuentra el panel de administrador.

Este panel se encuentra dividido en dos componentes, **usuariosListado** y **torneosListado**.

**TORNEOSLISTADO |**
Aqui encontrara la opcion de crear un torneo y una lista de los torneos y cada uno contara con las opciones de:

-  Borrar
-  modificar
  
**USUARIOSLISTADO |** Aqui encontrara la opcion de borrar a usuarios de una lista con el boton de borrar (X)

<br />

### **🖱 BASE DE DATOS**

La base de datos consta dos modelos para tu base de datos. Una es para los usuarios y la otra es para los torneos. La relación entre ambos es de muchos a muchos. A continuación te dejamos las propiedades los modelos.

**MODELO 1 | Usuario**

-  id. \*
-  Nombre. \*
-  foto. \*
-  email. \*
-  admin. \*

<br />

**MODELO 2 | Torneo**

-  id. \*
-  evento. \*
-  portada. \*
-  ubicacion. \*
-  estado. \*
-  fecha. \*

<br />

---

<br />

### **🖱 BACK-END**

Las principales rutas son:

**API | usuario**

#### **GET | /usuario**

-  Esta ruta obtiene toda la info de todos los usuarios

#### **PUT | /usuario/[id]**

-  Esta ruta permite a un usuario registrarse en un torneo en especifico

#### **DELETE | /usuario/[ID]**

-  Borra al usuario y todo lo que este relacionado con el

#### **PUT | /usuario/email**

-  Esta ruta permite obtener a un usuario segun los datos al iniciar sesion, si no esta registrado en la base de datos se crea

#### **DELETE | /usuario/registro**

-  Esta ruta permite a un usuario cancelar su participacion en un torneo en especifico

**API | torneos**

#### **GET | /torneos**

-  Esta ruta obtiene toda la info de todos los torneos

#### **POST | /torneos**

-  Esta ruta permite crear un torneo en la base de datos

#### **GET | /torneos/[ID]**

-  Obtiene un torneo y toda la info relacionado con el

#### **DELETE | /usuario/[ID]**

-  Borra al torneo y todo lo que este relacionado con el

#### **PUT | /torneos/[ID]**

-  Permite modificar la info de un torneo en especifico


<div align="center">
<img src="./cooking.png" alt="" />
</div>
