# Password Manager

#### Video Demo:  <https://youtu.be/am8ZVgki4EQ>

## Description

This is an app that can be used to store the passwords for websites you frequent. Having unique passwords for each website is more important now than ever, so I decided to build a password manager to keep track of all of them. Since I aim to become a web developer, it was important that I use technolgies that are relevant in that field.

#### Technologies Used:
- MySQL
- React
- Node.js
- Crypto module in Node.js
- dot-env
- Axios
- Other small relevant libraries

## How it works
![image](https://user-images.githubusercontent.com/53790060/147832717-a875b0f5-d88b-48a0-8572-bcbfbf4b7040.png)

First the user is greeted with a page with an entry field for the password and the website the password is linked to. Here the user can enter their password and website to be stored in the passwords list below. Using the Node.js Crypto library with the `crypto.createCipheriv(algorithm, key, iv[, options])` function returns a Cipher object, with the given algorithm, key and initialization vector. The password is hashed using the 'aes-256-ctr' encryption algorithm before being stored in the MySQL database. The details for the DB are stored within a .env file to ensure that access to the database is more secure. 

The frontend and backend is linked using Axios, where Axios allows the password/website details entered on the page to be posted to the database. The MySQL database has four rows, the id, the password hash, the title and the initialization vector. All the rows are assigned to be NN to avoid any security issues. 

![image](https://user-images.githubusercontent.com/53790060/147832809-fc4b7a8d-1528-43f4-ad20-28f1035bda85.png)

When the user forgets the password they used, they can simply navigate back to the page and click on the button that has the relevant website to reveal the hidden password.

![image](https://user-images.githubusercontent.com/53790060/147832774-6bb91c1c-bb32-4c78-bd18-332f2f8897ad.png)

## Improvements
- Create a login/register page before accessing the application.
- Create an inbuilt password generator to add to the page.
- Allow the ability to re-hide the password after revealing it.

## Prerequisites
- Node 16.13.1 LTS
- MySQL Workbench
- a dot-env file with your database details

## To start the project
Clone the project using `git clone https://github.com/DeviousLab/password-manager.git`

You must use the command `yarn` in both the `client` and `server` directories to install all the dependencies.

Then in the `server` folder use `node server.js` to start up the server on port 8000. 
And in the `client` folder use `yarn start` to generate the frontend. 

Navigate to [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The application should be ready to start using.

#### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
