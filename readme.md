<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MilanMahanti/natours-api">
    <img src="https://github.com/MilanMahanti/natours-api/assets/114055453/d4bc1ce7-2080-4ce4-9532-f7fd36ee3b19" alt="Logo" >
  </a>

  <p align="center">
    <br />
    <a href="https://documenter.getpostman.com/view/31154118/2s9YsKfrQ9"><strong>Explore the API docs »</strong></a>
    <br />
    <br />
    <a href="https://natours-4rbr.onrender.com/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Introduction

<img width="929" alt="Screenshot 2024-01-09 203654" src="https://github.com/MilanMahanti/natours-api/assets/114055453/741351b7-4075-4d46-b080-830c5092ec04">


Natours is a feature packed tours application with a complete backend. Where you can explore tours and also book them. It also handels all the CRUD operations like adding tours,updating tours,deleting tours. It uses Stripe for a secure booking.
Explore the [API Docs](https://documenter.getpostman.com/view/31154118/2s9YsKfrQ9) to get all the information about the Natours API.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* ![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is built with Node so if you dont have Node install it first. 
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/MilanMahanti/natours-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Enviroment Variables in `config.env`
   ```js
   DATABASE_URL = 'ENTER YOUR DATABASE URL';
   DATABASE_PASSWORD='ENTER YOUR DATABASE PASSWORD';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## About
This project is built with **Node** and **Express**. For database I have used **MongoDB** with **Mongoose**. For rendering the pages I have used **Pug**. <br/>
This project follows the **MVC** architecture as it helps separating the bussiness logic. <br/>
This app is also secure from any **XSS** attack,**NoSQL** query injection and also limits request from any single IP address. <br/><br/>
For uploading the images to the database I have used Multer-
```js
    const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    });
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Milan Mahanti - milanmahanti16@gamil.com

Project Link: https://natours-4rbr.onrender.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project is part of Jonas's complete Node tutorial course on Udemy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/MilanMahanti/natours-api.svg?style=for-the-badge
[contributors-url]: https://github.com/MilanMahanti/natours-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MilanMahanti/natours-api.svg?style=for-the-badge
[forks-url]: https://github.com/MilanMahanti/natours-api/network/members
[stars-shield]: https://img.shields.io/github/stars/MilanMahanti/natours-api.svg?style=for-the-badge
[stars-url]: https://github.com/MilanMahanti/natours-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/MilanMahanti/natours-api.svg?style=for-the-badge
[issues-url]: https://github.com/MilanMahanti/natours-api/issues
[license-shield]: https://img.shields.io/github/license/MilanMahanti/natours-api.svg?style=for-the-badge
[license-url]: https://github.com/MilanMahanti/natours-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
