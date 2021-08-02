# Tech Blog
## Description

This project implements a tech blog. Users can create accounts, create blog posts, update blog posts, delete blog posts and comment on blog posts. It was implemented by using mySQL, Express, node JS, and sequelize.

## Site Picture
![Site](./tech-blog-readme.gif)

## Getting Started

To view and edit the files you can clone the repo from github using the following command:

```
git clone git@github.com:ts795/tech-blog.git
```

After cloning the repo, mySQL, node and npm must be installed. Type
```
 npm install
```
to install dependencies.
After doing that, create a .env file in the same directory as server.js with the following content
```
DB_NAME=tech_blog_db
DB_USER=root
DB_PASSWORD=<your mysql password>
```
Then source db/schema.sql in the mysql shell.
After that type:
```
npm run seed
npm run start
```


## Usage

Type 
```
npm run start
```
Open the browser at http://localhost:[port printed out in console]/

## Built With

* [Express](https://expressjs.com/)
* [nodeJS](https://nodejs.org/en/)
* [mySQL](https://www.mysql.com/)
* [sequelize](https://sequelize.org/)

## Deployed Link

* [See Live Site](https://damp-tundra-10402.herokuapp.com/)

## Authors

* Sam Lingampalli 

- [Link to Github](https://github.com/ts795)
- Email: sam.l.full.stack@gmail.com


## License

This project is licensed under the MIT License 

## Acknowledgments

* UC Berkeley Extension