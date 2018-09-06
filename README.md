
# Wine Collector (client)
This is a wine tasting client application. Users can select from a large list of
wines and can create tasting notes for each wine. It is a single page
application (SPA) that interfaces with a Ruby on Rails backend API using AJAX.
https://mdipietr0.github.io/wine-collector-client/

Link to the API:
https://powerful-savannah-65213.herokuapp.com

## Technologies Used:

- HTML
- CSS
- Bootstrap 4
- JavaScript
- jQuery
- AJAX
- Git
- Handlebars

## Planning and Development process:

My process began with planning out how my client app would communicate with the
API. I first determined what resources I would need from the API and what
endpoints needed to be interfaced with for each of those resources.

I determined that I would need to make requests to three resources; a 'User'
resource, a 'Wines' resource, and a 'Tastings' resource. I began to organize my
file structure by creating subdirectories in my scripts directory for each
resource. Within each resource's subdirectory I created 3 files to separate
event handlers, API calls, and UI updates related to the resource.

I began coding in the plumbing of my app by creating a simple HTML document
to use for development and testing. It consisted of forms and buttons that
I would hook up to handlers and trigger API calls. I then hooked these elements
up to my javascript by adding event handlers in jQuery. I added the
functionality for each endpoint incrementally, testing each before moving on to
the next one. Once this bit of plumbing was done I continued to implement all of
the interactions with each API endpoint.

Once all of the endoints were connecting I structured my UI with bootstrap and
made the client more user friendly.

[Wireframe1](https://i.imgur.com/7o02CGE.png)
[Wireframe2](https://i.imgur.com/AwISyEt.png)

## User Stories:
  - A user will be able to register an account
    - Upon success the user will also be signed in
    - Upon failure the user will be shown an error message
  - A user will be able to log in to their account
    - Upon success the user will be shown the main menu screen
    - Upon failure the user will be shown an error message
  - A user will be able to log out out their account
    - Upon success the user will be signed out and returned to the landing page
    - Upon failure the user will be shown an error message
  - A user will be able to change their password
    - Upon success the user will be shown a success message
    - Upon failure the user will be shown an error message
  - A user will be able to view all available wines
  - A user will be able to view wines by color
  - A user will be able to create tasting notes for each wine
  - A user will be able to read their notes
  - A user will be able to update their notes
  - A user will be able to delete their notes


## Version 2 (Currently developing):

  - More intuitive note forms in the form of provided descriptions('Fruity',
    'Floral', 'Light', etc)
  - Better UX/UI overall
