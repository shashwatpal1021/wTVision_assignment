# Authentication with React Js and Django


This README outlines the steps to set up, install dependencies, configure PostgreSQL, and run the Django project.

#### Prerequisites

Before starting, ensure you have the following installed:

- [Python 3.x](https://www.python.org/downloads/)
- [pip (Python package manager)](https://pip.pypa.io/en/stable/installation/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Step-by-Step Setup Guide

###### 1. Clone the Repository

Clone the Django project repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

###### 2. Create and Activate a Virtual Environment

Create a virtual environment to manage dependencies:

```bash
python -m venv venv
```

Activate the virtual environment:

- **On macOS/Linux**:

  ```bash
  source venv/bin/activate
  ```

- **On Windows**:

  ```bash
  venv\Scripts\activate
  ```

###### 3. Install Dependencies

Install the project dependencies from `requirements.txt`:

```bash
pip install -r requirements.txt
```

###### 4. Configure PostgreSQL Database

Make sure PostgreSQL is installed and running on your machine. Create a new PostgreSQL database and user (if not already created).

######## 4.1. Create Database and User

1. Open the PostgreSQL shell:

   ```bash
   psql -U postgres
   ```

2. Create the database:

   ```sql
   CREATE DATABASE your_db_name;
   ```

3. Create a user with a password:

   ```sql
   CREATE USER your_username WITH PASSWORD 'your_password';
   ```

4. Grant all privileges on the database to the user:

   ```sql
   GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_username;
   ```

######## 4.2. Replace the Existing Database

If you have an existing `.sql` dump file of the database, you can replace the new database with this existing one.

1. Exit the PostgreSQL shell and use the `psql` command to restore the existing database:

   ```bash
   psql -U your_username -d your_db_name -f /path/to/your/dumpfile.sql
   ```

###### 5. Update the Django Database Settings

Open your Django project settings file `settings.py`, and update the `DATABASES` configuration with your PostgreSQL details:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

###### 6. Apply Migrations

Apply the database migrations to set up your tables and models:

```bash
python manage.py makemigrations
python manage.py migrate
```

###### 7. Create a Superuser

Create an admin superuser for the Django admin interface:

```bash
python manage.py createsuperuser
```

Follow the prompts to provide a username, email, and password for the superuser.

###### 8. Run the Django Development Server

Start the Django development server:

```bash
python manage.py runserver
```

Now, you can access the application at `http://127.0.0.1:8000/`.

###### 9. Access the Django Admin Panel

To access the Django admin panel, go to `http://127.0.0.1:8000/admin/` and log in using the superuser credentials you created earlier.


## React Project Setup

This README provides instructions to set up, install dependencies, and run the React project.

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (which includes npm)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

You can verify the installation by running:

```bash
node -v
npm -v
```

### Step-by-Step Setup Guide

#### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

To install all the necessary dependencies, run:

```bash
npm install
```

This will install all the packages listed in the `package.json` file.

### 3. Run the Development Server

Once the dependencies are installed, you can run the React development server:

```bash
npm start
```

This will start the server, and you can view the application by visiting:

```
http://localhost:3000/
```

Make sure to replace these values with actual environment values based on the project needs.

### Useful Commands

- **Start the development server**:

  ```bash
  npm start
  ```

- **Build for production**:

  ```bash
  npm run build
  ```

