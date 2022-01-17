# This is for Cloud and distributed system final project

The full project is not fully finished as there are functions to be added and polish (But no time sadge ;-;)
The idea of this project is to create your own profile and gallery

For Backend

cd backend
docker-compose build && docker-compose up -d

docker-compose exec php php /var/www/html/artisan migrate  

^ beware that if you put your project folder in some places that docker cant see this might not work, you can add your project location to docker in the settings

settings -> resources -> file sharing

For frontend
How to make it work, go to frontend and start it

cd frontend

npm start

How to use the website:
press the update picture first after putting image (having anything null can break stuff, havent change it on the migration to make it allow null)