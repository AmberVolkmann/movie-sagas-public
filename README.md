# Project Name
## Description
 This project allows users to interact with a database of movies. Upon load of the homepage, the user is able to click on the the movie post to display the details of the movie - including the summary and genres. From the details page, the user is able to edit both the details and summary, and save it to the database.

## Installation
- Create a database named movie_sagas_weekend,
- Insert data into database
- `npm install`
- `npm run server`
- `npm run client`
- A new tab will open on localhost:3000

## Support
If you have any questions or comments, please conact me at volkmannamber@gmail.com


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) in Minneapolis who equipped and helped me to make this application a reality.
 

### Movies
We've added some movie posters in the `public/images` folder, and the database is set up to use them.

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!

## Video Wireframe

[video ![Home Wireframe](/wireframes/home-wireframe.png)](https://vimeo.com/343530927)

## Feature List

**Do not implement image upload for base mode**

> NOTE: Start by taking inventory of the existing code. Part of the work for setting up sagas has been done for you.

### Home / List Page

This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.

### Details Page

This should show all details **including genres**, for the selected movie.

The details page should have the buttons:

- `Back to List` button, which should bring the user to the Home Page
- `Edit` button, which should bring the user to the Edit Page

> Base functionality does not require the movie details to load correctly after refresh of the browser.

### Edit Page

This should show:

- an input field (for changing the movie title), for the selected movie.
- a textarea (for changing the movie description)

The details page should have the buttons:

- `Cancel` button, which should bring the user to the Details Page
- `Save` button, which should update the title and description in the database and bring the user to the Details Page

> Base functionality does not require the current values (the existing movie title and description) to populate in the input and textarea.

> Base functionality does not require the movie information to load correctly after refresh of the browser.

### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!




